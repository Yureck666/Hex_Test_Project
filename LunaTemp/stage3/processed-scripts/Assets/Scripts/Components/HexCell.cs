using UnityEngine;
using DG.Tweening;
using Hex.Utils;

namespace Hex.Components
{
    public class HexCell : MonoBehaviour
    {
        [SerializeField] Renderer highlightRenderer;

        Material _highlightMaterial;
        bool _isDisabled;

        public HexCoordinates Coordinates { get; private set; }
        public bool IsOccupied => CurrentStack != null;
        public bool IsValidForPlacement => !_isDisabled && !IsOccupied;
        public HexStack CurrentStack { get; private set; }

        void Awake()
        {
            highlightRenderer.transform.localScale = Vector3.zero;
        }

        void OnDestroy()
        {
            DOTween.Kill(highlightRenderer.transform);
        }

        public void Initialize([Bridge.Ref] HexCoordinates coords, bool disabled)
        {
            Coordinates = coords;
            _isDisabled = disabled;

            if (_isDisabled)
            {
                gameObject.SetActive(false);
            }
        }

        public void SetStack(HexStack stack)
        {
            CurrentStack = stack;
            if (stack != null)
            {
                stack.transform.SetParent(transform);
                stack.transform.localPosition = Vector3.zero;
            }
        }

        public void ClearStack()
        {
            CurrentStack = null;
        }

        public void ShowHighlight(float duration)
        {
            if (_isDisabled) return;
            DOTween.Kill(highlightRenderer.transform);
            highlightRenderer.transform.DOScale(Vector3.one, GetDuration(Vector3.one, duration)).SetEase(Ease.OutBack);
        }

        public void HideHighlight(float duration)
        {
            DOTween.Kill(highlightRenderer.transform);
            highlightRenderer.transform.DOScale(Vector3.zero, GetDuration(Vector3.zero, duration)).SetEase(Ease.InBack);
        }

        private float GetDuration([Bridge.Ref] Vector3 target, float fullDuration)
        {
            var fullDif = Vector3.one.magnitude;
            var dif = Vector3.Distance(highlightRenderer.transform.localScale, target);
            return fullDuration * (dif / fullDif);
        }
    }
}
