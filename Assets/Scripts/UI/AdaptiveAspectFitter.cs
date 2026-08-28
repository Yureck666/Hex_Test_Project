using UnityEngine;
using UnityEngine.UI;

namespace UI
{
    [RequireComponent(typeof(AspectRatioFitter))]
    public class AdaptiveAspectFitter : MonoBehaviour
    {
        private AspectRatioFitter _fitter;
        private int _lastScreenWidth;
        private int _lastScreenHeight;

        private void Awake()
        {
            _fitter = GetComponent<AspectRatioFitter>();
        }

        private void Start()
        {
            _lastScreenWidth = Screen.width;
            _lastScreenHeight = Screen.height;
            UpdateMode();
        }

        private void LateUpdate()
        {
            if (_lastScreenWidth == Screen.width && _lastScreenHeight == Screen.height)
                return;

            _lastScreenWidth = Screen.width;
            _lastScreenHeight = Screen.height;
            UpdateMode();
        }

        private void UpdateMode()
        {
            var screenAspect = (float)Screen.width / Screen.height;

            var newMode = screenAspect < _fitter.aspectRatio
                ? AspectRatioFitter.AspectMode.WidthControlsHeight
                : AspectRatioFitter.AspectMode.HeightControlsWidth;

            if (_fitter.aspectMode != newMode)
                _fitter.aspectMode = newMode;
        }
    }
}
