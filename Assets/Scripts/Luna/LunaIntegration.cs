namespace Hex.Luna
{
    public static class LunaIntegration
    {
        static bool _gameEndedSent;
        static bool _challengeStartedSent;
        static bool _challengeSolvedSent;
        static bool _endcardShownSent;
        static int _progressPercentSent;

        public static void GameEnded()
        {
            if (_gameEndedSent) return;
            _gameEndedSent = true;
            global::Luna.Unity.LifeCycle.GameEnded();
        }

        public static void InstallFullGame()
        {
            LogEvent("CTA_CLICKED");
            global::Luna.Unity.Playable.InstallFullGame();
        }

        public static void ChallengeStarted()
        {
            if (_challengeStartedSent) return;
            _challengeStartedSent = true;
            LogEvent("CHALLENGE_STARTED");
        }

        public static void ReportChallengeProgress(float normalized)
        {
            int percent = (int)(normalized * 100f);

            if (percent >= 25) SendProgress(25);
            if (percent >= 50) SendProgress(50);
            if (percent >= 75) SendProgress(75);
        }

        public static void ChallengeSolved()
        {
            if (_challengeSolvedSent) return;
            _challengeSolvedSent = true;

            SendProgress(25);
            SendProgress(50);
            SendProgress(75);
            LogEvent("CHALLENGE_SOLVED");
        }

        public static void EndcardShown()
        {
            if (_endcardShownSent) return;
            _endcardShownSent = true;
            LogEvent("ENDCARD_SHOWN");
        }

        static void SendProgress(int percent)
        {
            if (_progressPercentSent >= percent) return;
            _progressPercentSent = percent;
            LogEvent("CHALLENGE_PASS_" + percent);
        }

        static void LogEvent(string eventName)
        {
            global::Luna.Unity.Analytics.LogEvent(eventName, 0);
        }
    }
}
