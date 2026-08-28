using UnityEngine;
using UnityEditor;
using Hex.Data;
using Hex.Utils;
using System.Collections.Generic;

namespace Hex.Editor
{
    public static class ScriptableObjectSetup
    {
        [MenuItem("Tools/Hex/Create ScriptableObjects")]
        public static void CreateScriptableObjects()
        {
            CreateGameSettings();
            CreateTutorialLevel();
            AssetDatabase.SaveAssets();
            AssetDatabase.Refresh();
            Debug.Log("ScriptableObjects created successfully!");
        }

        static void CreateGameSettings()
        {
            string path = "Assets/Data/GameSettings.asset";

            if (!AssetDatabase.IsValidFolder("Assets/Data"))
                AssetDatabase.CreateFolder("Assets", "Data");

            GameSettings settings = AssetDatabase.LoadAssetAtPath<GameSettings>(path);
            if (settings == null)
            {
                settings = ScriptableObject.CreateInstance<GameSettings>();

                settings.cellSize = 1f;
                settings.cellGap = 0.1f;
                settings.stackElementGap = 0.2f;

                settings.pickupDuration = 0.5f;
                settings.pickupHeight = 2f;
                settings.dropDuration = 0.5f;
                settings.dragLerpSpeed = 15f;
                settings.returnSpeed = 10f;

                settings.highlightFadeDuration = 0.3f;

                settings.hexFlightDuration = 0.5f;
                settings.hexFlightArcHeight = 2f;
                settings.flightStartDelay = 0.1f;

                settings.disappearDuration = 0.25f;
                settings.disappearStartDelay = 0.1f;

                settings.tutorialIdleTime = 0.5f;
                settings.tutorialGrabDelay = 0.5f;
                settings.tutorialMoveDelay = 1f;

                settings.packshotDelay = 2f;
                settings.packshotFadeDuration = 1f;

                AssetDatabase.CreateAsset(settings, path);
                Debug.Log($"Created GameSettings at {path}");
            }
            else
            {
                Debug.Log("GameSettings already exists");
            }
        }

        static void CreateTutorialLevel()
        {
            string folder = "Assets/Data/Levels";
            if (!AssetDatabase.IsValidFolder(folder))
            {
                if (!AssetDatabase.IsValidFolder("Assets/Data"))
                    AssetDatabase.CreateFolder("Assets", "Data");
                AssetDatabase.CreateFolder("Assets/Data", "Levels");
            }

            string path = $"{folder}/Level_Tutorial.asset";

            LevelData level = AssetDatabase.LoadAssetAtPath<LevelData>(path);
            if (level == null)
            {
                level = ScriptableObject.CreateInstance<LevelData>();

                level.gridWidth = 5;
                level.gridHeight = 5;

                level.disabledCells = new List<HexCoordinates>
                {
                    new HexCoordinates(0, 0),
                    new HexCoordinates(4, 0),
                    new HexCoordinates(0, 4),
                    new HexCoordinates(4, 4)
                };

                level.initialStacks = new List<StackData>
                {
                    new StackData
                    {
                        gridPosition = new HexCoordinates(1, 1),
                        colorsFromBottomToTop = new List<HexColor> { HexColor.Blue, HexColor.Blue }
                    },
                    new StackData
                    {
                        gridPosition = new HexCoordinates(3, 1),
                        colorsFromBottomToTop = new List<HexColor> { HexColor.Red, HexColor.Red }
                    },
                    new StackData
                    {
                        gridPosition = new HexCoordinates(2, 3),
                        colorsFromBottomToTop = new List<HexColor> { HexColor.Yellow }
                    }
                };

                level.playerStacks = new List<StackData>
                {
                    new StackData
                    {
                        gridPosition = new HexCoordinates(-1, -1),
                        colorsFromBottomToTop = new List<HexColor> { HexColor.Blue }
                    },
                    new StackData
                    {
                        gridPosition = new HexCoordinates(-1, -1),
                        colorsFromBottomToTop = new List<HexColor> { HexColor.Red }
                    },
                    new StackData
                    {
                        gridPosition = new HexCoordinates(-1, -1),
                        colorsFromBottomToTop = new List<HexColor> { HexColor.Yellow, HexColor.Green }
                    }
                };

                level.tutorialTargetStackIndex = 0;
                level.tutorialTargetCell = new HexCoordinates(2, 2);

                AssetDatabase.CreateAsset(level, path);
                Debug.Log($"Created Level_Tutorial at {path}");
            }
            else
            {
                Debug.Log("Level_Tutorial already exists");
            }
        }
    }
}
