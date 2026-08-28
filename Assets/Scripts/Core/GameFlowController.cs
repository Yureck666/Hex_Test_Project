using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
using Hex.Data;
using Hex.Utils;
using Hex.Components;
using Hex.UI;
using Hex.Luna;

namespace Hex.Core
{
    public class GameFlowController : MonoBehaviour
    {
        const float BatchAppearDuration = 0.45f;
        const float BatchAppearStagger = 0.1f;

        [Header("Data")]
        [SerializeField] GameSettings gameSettings;
        [SerializeField] LevelData levelData;

        [Header("Prefabs")]
        [SerializeField] HexCell cellPrefab;
        [SerializeField] HexStack stackPrefab;
        [SerializeField] HexElement elementPrefab;

        [Header("Materials")]
        [SerializeField] Material[] hexMaterials = new Material[7];

        [Header("Player Stacks")]
        [SerializeField] Transform[] playerStackTransforms = new Transform[3];

        [Header("Reactions")]
        [SerializeField] ColorMaterialMapping colorMapping;
        [SerializeField] GameObject disappearParticlePrefab;

        [Header("Tutorial")]
        [SerializeField] TutorialHand tutorialHand;

        [Header("Packshot")]
        [SerializeField] PackshotScreen packshotScreen;

        GridManager _gridManager;
        DragDropController _dragDropController;
        ReactionSystem _reactionSystem;
        StackDisappearController _disappearController;
        ObjectPool<HexElement> _elementPool;

        List<HexStack> _activePlayerStacks = new List<HexStack>();
        int _playerStackBatchStart;
        bool _hasSuccessfulPlacement;
        int _playedStacksCount;
        bool _winTriggered;

        void Awake()
        {
            _gridManager = GetComponent<GridManager>();
            _dragDropController = GetComponent<DragDropController>();
            _reactionSystem = GetComponent<ReactionSystem>();
            _disappearController = GetComponent<StackDisappearController>();
        }

        void Start()
        {
            InitializeLevel();
        }

        void InitializeLevel()
        {
            _elementPool = new ObjectPool<HexElement>(elementPrefab, 50, transform);

            _gridManager.Initialize(levelData, gameSettings, cellPrefab);
            _reactionSystem.Initialize(_gridManager, gameSettings);
            _dragDropController.Initialize(_gridManager, gameSettings, _reactionSystem);
            _disappearController.Initialize(gameSettings, _gridManager, colorMapping, disappearParticlePrefab);

            _gridManager.CreateInitialStacks(levelData.initialStacks, _elementPool, stackPrefab, hexMaterials);
            ShowNextPlayerStackBatch();

            _dragDropController.OnStackPickedUp += OnStackPickedUp;
            _dragDropController.OnStackPlaced += OnStackPlaced;
            _dragDropController.OnStackReturned += OnStackReturned;
            _reactionSystem.OnReactionCompleted += OnReactionCompleted;

            SetupTutorial();
        }

        void SetupTutorial()
        {
            if (tutorialHand == null) return;

            tutorialHand.Initialize(gameSettings);
            tutorialHand.StartTutorial();
        }

        void OnStackPickedUp(HexStack stack)
        {
            LunaIntegration.ChallengeStarted();
            _reactionSystem.ResetSpeedMultiplier();
            tutorialHand?.StopTutorial();
        }

        void OnStackReturned(HexStack stack)
        {
            if (!_hasSuccessfulPlacement && tutorialHand != null)
                tutorialHand.RestartWithDelay(gameSettings.tutorialRestartDelay);
        }

        void OnStackPlaced(HexStack stack, HexCell cell)
        {
            _hasSuccessfulPlacement = true;
            _playedStacksCount++;
            LunaIntegration.ReportChallengeProgress((float)_playedStacksCount / gameSettings.stacksToWin);
            _reactionSystem.CheckReactions();

            _activePlayerStacks.Remove(stack);

            if (_activePlayerStacks.Count == 0)
                ShowNextPlayerStackBatch();
        }

        void ShowNextPlayerStackBatch()
        {
            if (levelData.playerStacks.Count == 0)
                return;

            if (_playerStackBatchStart >= levelData.playerStacks.Count)
                return;

            int batchSize = Mathf.Min(playerStackTransforms.Length, levelData.playerStacks.Count - _playerStackBatchStart);

            for (int i = 0; i < batchSize; i++)
            {
                if (playerStackTransforms[i] == null)
                {
                    Debug.LogWarning($"Player stack transform {i} is not assigned!");
                    continue;
                }

                StackData data = levelData.playerStacks[_playerStackBatchStart + i];
                HexStack stack = Instantiate(stackPrefab, playerStackTransforms[i].position, Quaternion.identity);
                stack.name = $"PlayerStack_{_playerStackBatchStart + i}";
                stack.transform.SetParent(playerStackTransforms[i]);
                stack.Initialize(data.colorsFromBottomToTop, gameSettings.stackElementGap, _elementPool, hexMaterials);

                BoxCollider collider = stack.gameObject.AddComponent<BoxCollider>();
                collider.center = new Vector3(0, 0.5f, 0);
                collider.size = new Vector3(1f, 1f, 1f);

                stack.transform.localScale = Vector3.zero;
                stack.transform.DOScale(Vector3.one, BatchAppearDuration)
                    .SetEase(Ease.OutBack)
                    .SetDelay(i * BatchAppearStagger);

                _activePlayerStacks.Add(stack);
            }

            _playerStackBatchStart += batchSize;
        }

        void OnReactionCompleted()
        {
            CheckWinCondition();
        }

        void CheckWinCondition()
        {
            if (_winTriggered) return;
            if (_playedStacksCount < gameSettings.stacksToWin) return;

            _winTriggered = true;
            LunaIntegration.ChallengeSolved();
            _dragDropController.enabled = false;
            packshotScreen?.Show(gameSettings.packshotDelay, gameSettings.packshotFadeDuration);
        }
    }
}
