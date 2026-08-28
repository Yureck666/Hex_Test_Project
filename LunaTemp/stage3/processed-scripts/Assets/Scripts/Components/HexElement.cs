using UnityEngine;
using DG.Tweening;
using Hex.Data;

namespace Hex.Components
{
    public class HexElement : MonoBehaviour
    {
        Transform _transform;
        Renderer _renderer;
        MaterialPropertyBlock _propBlock;

        public HexColor Color { get; private set; }

        void Awake()
        {
            _transform = transform;
            _renderer = GetComponent<Renderer>();
            _propBlock = new MaterialPropertyBlock();
        }

        void OnDestroy()
        {
            DOTween.Kill(_transform);
        }

        public void Initialize(HexColor color, Material material)
        {
            Color = color;
            _renderer.material = material;
        }

        public void AnimateFlight(Vector3 from, Vector3 to, float duration, float arcHeight, System.Action onComplete)
        {
            DOTween.Kill(_transform);
            _transform.position = from;

            Vector3 mid = (from + to) / 2f;
            mid.y += arcHeight;

            Vector3[] path = { from, mid, to };

            Vector3 flightDirection = (to - from).normalized;
            Vector3 rotationAxis = Vector3.Cross(Vector3.up, flightDirection).normalized;

            float rotated = 0f;
            Sequence seq = DOTween.Sequence();
            seq.Append(_transform.DOPath(path, duration, PathType.CatmullRom).SetEase(Ease.InOutSine));
            seq.Join(DOTween.To(() => rotated, x =>
            {
                _transform.Rotate(rotationAxis, x - rotated, Space.World);
                rotated = x;
            }, 180f, duration).SetEase(Ease.InOutSine));
            seq.OnComplete(() => onComplete?.Invoke());
        }

        public void AnimateDisappear(float duration, System.Action onComplete)
        {
            _transform.DOScale(0f, duration)
                .SetEase(Ease.InBack)
                .OnComplete(() => onComplete?.Invoke());
        }
    }
}
