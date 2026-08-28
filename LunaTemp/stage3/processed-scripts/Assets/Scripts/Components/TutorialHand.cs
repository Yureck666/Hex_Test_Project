using System.Collections;
using UnityEngine;
using DG.Tweening;
using Hex.Data;
using Hex.UI;

namespace Hex.Components
{
    public class TutorialHand : MonoBehaviour
    {
        [SerializeField] SpriteRenderer handRenderer;
        [SerializeField] TutorialOverlay overlay;
        [SerializeField] Transform pointStack;
        [SerializeField] Transform pointTarget;

        const float GrabScale = 0.7f;

        Camera _camera;
        GameSettings _settings;
        Coroutine _loopCoroutine;
        bool _stopped;

        void Awake()
        {
            _camera = Camera.main;
            Color c = handRenderer.color;
            c.a = 0f;
            handRenderer.color = c;
        }

        void LateUpdate()
        {
            transform.forward = _camera.transform.forward;
        }

        public void Initialize(GameSettings settings)
        {
            _settings = settings;
        }

        public void StartTutorial()
        {
            _stopped = false;
            overlay?.Show(0.4f);
            _loopCoroutine = StartCoroutine(TutorialLoop());
        }

        public void RestartWithDelay(float delay)
        {
            _stopped = false;
            gameObject.SetActive(true);
            _loopCoroutine = StartCoroutine(RestartCoroutine(delay));
        }

        public void StopTutorial()
        {
            _stopped = true;
            if (_loopCoroutine != null)
                StopCoroutine(_loopCoroutine);
            overlay?.Hide(0.3f);
            DOTween.Kill(handRenderer);
            DOTween.Kill(handRenderer.transform);
            handRenderer.DOFade(0f, 0.3f).OnComplete(() => gameObject.SetActive(false));
        }

        IEnumerator RestartCoroutine(float delay)
        {
            yield return new WaitForSeconds(delay);
            if (!_stopped)
            {
                overlay?.Show(0.4f);
                yield return TutorialLoop();
            }
        }

        IEnumerator TutorialLoop()
        {
            yield return new WaitForSeconds(_settings.tutorialIdleTime);

            while (!_stopped)
            {
                handRenderer.transform.position = pointStack.position;

                handRenderer.transform.localScale = Vector3.one;
                handRenderer.DOFade(1f, 0.3f);
                yield return new WaitForSeconds(_settings.tutorialGrabDelay);

                yield return handRenderer.transform.DOScale(GrabScale, 0.15f)
                    .SetEase(Ease.InBack)
                    .WaitForCompletion();

                float distance = Vector3.Distance(handRenderer.transform.position, pointTarget.position);
                float moveDuration = distance / 5f;
                yield return handRenderer.transform.DOMove(pointTarget.position, moveDuration)
                    .SetEase(Ease.InOutSine)
                    .WaitForCompletion();

                yield return new WaitForSeconds(_settings.tutorialMoveDelay);

                yield return handRenderer.transform.DOScale(Vector3.one, 0.15f)
                    .SetEase(Ease.OutBack)
                    .WaitForCompletion();

                yield return handRenderer.DOFade(0f, 0.3f).WaitForCompletion();

                yield return new WaitForSeconds(_settings.tutorialIdleTime);
            }
        }
    }
}
