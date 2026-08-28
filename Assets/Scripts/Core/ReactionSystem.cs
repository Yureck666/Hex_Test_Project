using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using Hex.Data;
using Hex.Components;

namespace Hex.Core
{
    public class ReactionSystem : MonoBehaviour
    {
        public event System.Action OnReactionStarted;
        public event System.Action OnReactionCompleted;
        public event System.Action<HexStack> OnStackDisappeared;

        GridManager _gridManager;
        GameSettings _settings;
        int _disappearedStacksCount;
        float _speedMultiplier = 1f;
        bool _isReacting;

        public bool IsReacting => _isReacting;

        public void Initialize(GridManager gridManager, GameSettings settings)
        {
            _gridManager = gridManager;
            _settings = settings;
        }

        public void ResetSpeedMultiplier()
        {
            _disappearedStacksCount = 0;
            UpdateSpeedMultiplier();
        }

        public void CheckReactions()
        {
            StartCoroutine(CheckReactionsCoroutine());
        }

        IEnumerator CheckReactionsCoroutine()
        {
            _isReacting = true;
            OnReactionStarted?.Invoke();

            bool hadReactions = true;

            int roundCount = 0;
            while (hadReactions)
            {
                roundCount++;
                if (roundCount > 100)
                {
                    Debug.LogError("[ReactionSystem] Too many reaction rounds! Breaking to prevent infinite loop.");
                    break;
                }

                hadReactions = false;

                List<HexStack> allStacks = _gridManager.GetAllStacks();
                if (allStacks.Count == 0)
                    break;

                Dictionary<HexStack, int> initialHeights = new Dictionary<HexStack, int>();
                foreach (HexStack s in allStacks)
                {
                    initialHeights[s] = s.Height;
                }


                bool foundPair = false;

                foreach (HexStack stack in allStacks)
                {
                    if (foundPair) break;
                    if (stack.IsDisappearing) continue;

                    HexCell cell = stack.GetComponentInParent<HexCell>();
                    if (cell == null) continue;

                    List<HexCell> neighborCells = _gridManager.GetNeighbors(cell.Coordinates);

                    foreach (HexCell neighborCell in neighborCells)
                    {
                        if (foundPair) break;
                        if (!neighborCell.IsOccupied) continue;

                        HexStack neighborStack = neighborCell.CurrentStack;
                        if (neighborStack.IsDisappearing) continue;

                        if (stack.TopColor != neighborStack.TopColor) continue;

                        HexStack shorterStack = initialHeights[stack] <= initialHeights[neighborStack] ? stack : neighborStack;
                        HexStack tallerStack = initialHeights[stack] > initialHeights[neighborStack] ? stack : neighborStack;

                        foundPair = true;
                        hadReactions = true;

                        int elementsToMove = CountSameColorFromTop(tallerStack);

                        int pendingFlights = 0;
                        float delay = _settings.flightStartDelay / _speedMultiplier;

                        for (int i = 0; i < elementsToMove; i++)
                        {
                            if (tallerStack.IsEmpty) break;

                            HexElement element = tallerStack.RemoveTop();
                            if (element == null) break;

                            Vector3 from = element.transform.position;
                            Vector3 to = shorterStack.transform.position;
                            to.y = shorterStack.Height * _settings.stackElementGap + 0.15f;

                            float duration = _settings.hexFlightDuration / _speedMultiplier;
                            float arcHeight = _settings.hexFlightArcHeight;

                            pendingFlights++;
                            element.AnimateFlight(from, to, duration, arcHeight, () =>
                            {
                                shorterStack.AddElement(element);
                                pendingFlights--;
                            });

                            yield return new WaitForSeconds(delay);
                        }

                        while (pendingFlights > 0)
                        {
                            yield return null;
                        }
                    }
                }

                CleanupEmptyStacks();
                CheckForDisappear();
            }

            _isReacting = false;
            OnReactionCompleted?.Invoke();
        }


        void CleanupEmptyStacks()
        {
            foreach (HexStack stack in _gridManager.GetAllStacks())
            {
                if (!stack.IsEmpty) continue;

                HexCell cell = stack.GetComponentInParent<HexCell>();
                if (cell != null)
                    cell.ClearStack();

                Destroy(stack.gameObject);
            }
        }

        void CheckForDisappear()
        {
            List<HexStack> allStacks = _gridManager.GetAllStacks();
            List<HexStack> stacksToDisappear = allStacks
                .Where(s => s.Height >= 10 && !s.IsDisappearing && AllElementsSameColor(s))
                .ToList();

            foreach (HexStack stack in stacksToDisappear)
            {
                stack.IsDisappearing = true;
                _disappearedStacksCount++;
                UpdateSpeedMultiplier();
                OnStackDisappeared?.Invoke(stack);
                StartCoroutine(RunDisappearAndCheckReactions(stack));
            }
        }

        IEnumerator RunDisappearAndCheckReactions(HexStack stack)
        {
            StackDisappearController disappearController = GetComponent<StackDisappearController>();
            yield return disappearController.DisappearStack(stack, _speedMultiplier);

            if (!_isReacting)
                CheckReactions();
        }

        void UpdateSpeedMultiplier()
        {
            _speedMultiplier = 1f + (_disappearedStacksCount * 0.3f);
        }

        bool AllElementsSameColor(HexStack stack)
        {
            List<HexElement> elements = stack.GetAllElements();
            if (elements.Count == 0) return false;

            HexColor firstColor = elements[0].Color;
            return elements.All(e => e.Color == firstColor);
        }

        int CountSameColorFromTop(HexStack stack)
        {
            if (stack.IsEmpty) return 0;

            HexColor topColor = stack.TopColor;
            int count = 0;

            List<HexElement> elements = stack.GetAllElements();
            for (int i = elements.Count - 1; i >= 0; i--)
            {
                if (elements[i].Color == topColor)
                    count++;
                else
                    break;
            }

            return count;
        }
    }
}
