using UnityEngine;

namespace Hex.Data
{
    [CreateAssetMenu(fileName = "GameSettings", menuName = "Hex/Game Settings")]
    public class GameSettings : ScriptableObject
    {
        [Header("Grid")]
        public float cellSize = 1f;
        public float cellGap = 0.1f;
        public float stackElementGap = 0.2f;

        [Header("Drag & Drop")]
        public float pickupDuration = 0.5f;
        public float pickupHeight = 2f;
        public float dropDuration = 0.5f;
        public float dragLerpSpeed = 15f;
        public float returnSpeed = 10f;

        [Header("Highlight")]
        public float highlightFadeDuration = 0.3f;

        [Header("Chain Reaction")]
        public float hexFlightDuration = 0.5f;
        public float hexFlightArcHeight = 2f;
        public float flightStartDelay = 0.1f;

        [Header("Disappear")]
        public float disappearDuration = 0.25f;
        public float disappearStartDelay = 0.1f;

        [Header("Tutorial")]
        public float tutorialIdleTime = 3f;
        public float tutorialRestartDelay = 5f;
        public float tutorialGrabDelay = 0.5f;
        public float tutorialMoveDelay = 1f;

        [Header("Packshot")]
        public int stacksToWin = 3;
        public float packshotDelay = 2f;
        public float packshotFadeDuration = 1f;
    }
}
