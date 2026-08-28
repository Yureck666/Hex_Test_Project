namespace Hex.Luna
{
    public static class LunaIntegration
    {
        public static void GameEnded()
        {
            global::Luna.Unity.LifeCycle.GameEnded();
        }

        public static void InstallFullGame()
        {
            global::Luna.Unity.Playable.InstallFullGame();
        }
    }
}
