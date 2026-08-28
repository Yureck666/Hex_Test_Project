using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;
using Hex.Luna;

namespace Hex.UI
{
    public class PackshotScreen : MonoBehaviour
    {
        [SerializeField] CanvasGroup canvasGroup;
        [SerializeField] Button clickArea;

        void Awake()
        {
            canvasGroup.alpha = 0f;
            gameObject.SetActive(false);
            clickArea.onClick.AddListener(OnClick);
        }

        public void Show(float delay, float fadeDuration)
        {
            gameObject.SetActive(true);
            LunaIntegration.GameEnded();
            canvasGroup.DOFade(1f, fadeDuration).SetDelay(delay);
        }

        void OnClick()
        {
            LunaIntegration.InstallFullGame();
        }
    }
}
