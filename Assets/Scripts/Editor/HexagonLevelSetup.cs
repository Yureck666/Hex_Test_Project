using UnityEngine;
using UnityEditor;
using System.Collections.Generic;
using Hex.Data;
using Hex.Utils;

public class HexagonLevelSetup
{
    [MenuItem("Tools/Hex Quick Setup/4 - Setup Hexagon Level (Radius 3)")]
    public static void SetupHexagonLevel()
    {
        string path = "Assets/Data/Levels/Level_Tutorial.asset";
        LevelData level = AssetDatabase.LoadAssetAtPath<LevelData>(path);

        if (level == null)
        {
            Debug.LogError("Level_Tutorial.asset not found! Run '3 - Create Data Assets' first.");
            return;
        }

        int radius = 3;
        int gridSize = radius * 2 + 1;

        level.gridWidth = gridSize;
        level.gridHeight = gridSize;

        level.disabledCells = GetDisabledCellsForHexagon(radius, gridSize);

        level.initialStacks = new List<StackData>
        {
            new StackData
            {
                gridPosition = new HexCoordinates(2, 1),
                colorsFromBottomToTop = new List<HexColor> { HexColor.Blue, HexColor.Blue }
            },
            new StackData
            {
                gridPosition = new HexCoordinates(4, 1),
                colorsFromBottomToTop = new List<HexColor> { HexColor.Red, HexColor.Red }
            },
            new StackData
            {
                gridPosition = new HexCoordinates(3, 4),
                colorsFromBottomToTop = new List<HexColor> { HexColor.Yellow }
            }
        };

        level.playerStacks = new List<StackData>
        {
            new StackData
            {
                gridPosition = new HexCoordinates(0, 0),
                colorsFromBottomToTop = new List<HexColor> { HexColor.Blue }
            },
            new StackData
            {
                gridPosition = new HexCoordinates(0, 0),
                colorsFromBottomToTop = new List<HexColor> { HexColor.Red, HexColor.Yellow }
            },
            new StackData
            {
                gridPosition = new HexCoordinates(0, 0),
                colorsFromBottomToTop = new List<HexColor> { HexColor.Green }
            }
        };

        level.tutorialTargetStackIndex = 0;
        level.tutorialTargetCell = new HexCoordinates(3, 3);

        EditorUtility.SetDirty(level);
        AssetDatabase.SaveAssets();

        Debug.Log($"✅ Hexagon level setup complete! Radius: {radius}, Grid: {gridSize}x{gridSize}, Disabled cells: {level.disabledCells.Count}");
    }

    static List<HexCoordinates> GetDisabledCellsForHexagon(int radius, int gridSize)
    {
        List<HexCoordinates> disabledCells = new List<HexCoordinates>();
        int center = radius;

        for (int r = 0; r < gridSize; r++)
        {
            for (int q = 0; q < gridSize; q++)
            {
                int offsetQ = q - center;
                int offsetR = r - center;

                int distance = (Mathf.Abs(offsetQ) + Mathf.Abs(offsetR) + Mathf.Abs(offsetQ + offsetR)) / 2;

                if (distance > radius)
                {
                    disabledCells.Add(new HexCoordinates(q, r));
                }
            }
        }

        return disabledCells;
    }

    [MenuItem("Tools/Hex Quick Setup/5 - Custom Hexagon Radius")]
    public static void SetupCustomHexagon()
    {
        string radiusStr = EditorInputDialog.Show("Hexagon Radius", "Enter hexagon radius (1-5):", "3");

        if (int.TryParse(radiusStr, out int radius) && radius >= 1 && radius <= 10)
        {
            SetupHexagonWithRadius(radius);
        }
        else
        {
            Debug.LogError("Invalid radius! Must be between 1 and 10.");
        }
    }

    static void SetupHexagonWithRadius(int radius)
    {
        string path = "Assets/Data/Levels/Level_Tutorial.asset";
        LevelData level = AssetDatabase.LoadAssetAtPath<LevelData>(path);

        if (level == null)
        {
            Debug.LogError("Level_Tutorial.asset not found!");
            return;
        }

        int gridSize = radius * 2 + 1;

        level.gridWidth = gridSize;
        level.gridHeight = gridSize;
        level.disabledCells = GetDisabledCellsForHexagon(radius, gridSize);
        level.initialStacks = new List<StackData>();
        level.playerStacks = new List<StackData>();

        EditorUtility.SetDirty(level);
        AssetDatabase.SaveAssets();

        Debug.Log($"✅ Custom hexagon setup complete! Radius: {radius}, Grid: {gridSize}x{gridSize}");
    }
}

public static class EditorInputDialog
{
    public static string Show(string title, string message, string defaultValue)
    {
        return defaultValue;
    }
}
