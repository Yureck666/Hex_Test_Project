using UnityEngine;
using DG.Tweening;

namespace Hex.UI
{
    public class TutorialOverlay : MonoBehaviour
    {
        [SerializeField] CanvasGroup canvasGroup;
        [SerializeField] RectTransform holeStack;
        [SerializeField] RectTransform holeTarget;
        [SerializeField] Transform worldReferenceStack;
        [SerializeField] Transform worldReferenceTarget;

        Camera _camera;
        bool _positioned;

        void Awake()
        {
            _camera = Camera.main;
            canvasGroup.alpha = 0f;
            gameObject.SetActive(false);
        }

        public void Show(float duration)
        {
            gameObject.SetActive(true);

            if (!_positioned)
            {
                PositionHole(holeStack, worldReferenceStack.position);
                PositionHole(holeTarget, worldReferenceTarget.position);
                _positioned = true;
            }

            DOTween.Kill(canvasGroup);
            canvasGroup.DOFade(1f, duration);
        }

        public void Hide(float duration)
        {
            DOTween.Kill(canvasGroup);
            canvasGroup.DOFade(0f, duration).OnComplete(() => gameObject.SetActive(false));
        }

        void PositionHole(RectTransform hole, Vector3 worldPos)
        {
            hole.pivot = new Vector2(0.5f, 0.5f);
            Vector3 screenPos = _camera.WorldToScreenPoint(worldPos);
            hole.position = new Vector3(screenPos.x, screenPos.y, 0f);
        }
    }
}
