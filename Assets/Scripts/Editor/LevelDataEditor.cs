using UnityEngine;
using UnityEditor;
using System.Collections.Generic;
using System.Linq;
using Hex.Data;
using Hex.Utils;

[CustomEditor(typeof(LevelData))]
public class LevelDataEditor : Editor
{
    LevelData _levelData;
    HexCoordinates? _selectedCell;
    Vector2 _scrollPos;

    const float CellSize = 30f;
    const float CellGap = 2f;

    void OnEnable()
    {
        _levelData = (LevelData)target;
    }

    public override void OnInspectorGUI()
    {
        serializedObject.Update();

        EditorGUILayout.Space(10);
        EditorGUILayout.LabelField("Hexagon Grid Visualizer", EditorStyles.boldLabel);
        EditorGUILayout.Space(5);

        DrawGridVisualization();

        EditorGUILayout.Space(10);
        EditorGUILayout.LabelField("Level Settings", EditorStyles.boldLabel);

        DrawDefaultInspector();

        if (_selectedCell.HasValue)
        {
            EditorGUILayout.Space(10);
            DrawSelectedCellInfo();
        }

        serializedObject.ApplyModifiedProperties();
    }

    void DrawGridVisualization()
    {
        if (_levelData.gridWidth <= 0 || _levelData.gridHeight <= 0)
        {
            EditorGUILayout.HelpBox("Set Grid Width and Grid Height to see visualization", MessageType.Info);
            return;
        }

        Rect gridRect = GUILayoutUtility.GetRect(
            _levelData.gridWidth * CellSize * 1.2f,
            _levelData.gridHeight * CellSize * 0.8f
        );

        GUI.Box(gridRect, "", EditorStyles.helpBox);

        for (int r = 0; r < _levelData.gridHeight; r++)
        {
            for (int q = 0; q < _levelData.gridWidth; q++)
            {
                HexCoordinates coords = new HexCoordinates(q, r);
                DrawCell(coords, gridRect);
            }
        }

        HandleCellClick(gridRect);
    }

    void DrawCell(HexCoordinates coords, Rect containerRect)
    {
        Vector2 pos = GetCellScreenPosition(coords, containerRect);
        Rect cellRect = new Rect(pos.x - CellSize / 2, pos.y - CellSize / 2, CellSize, CellSize);

        bool isDisabled = _levelData.disabledCells.Contains(coords);
        bool hasStack = _levelData.initialStacks.Any(s => s.gridPosition.Equals(coords));
        bool isSelected = _selectedCell.HasValue && _selectedCell.Value.Equals(coords);

        Color cellColor = GetCellColor(isDisabled, hasStack, isSelected);

        Color prevColor = GUI.color;
        GUI.color = cellColor;

        GUI.Box(cellRect, "", GetCellStyle(isSelected));

        GUI.color = prevColor;

        GUIStyle labelStyle = new GUIStyle(EditorStyles.miniLabel);
        labelStyle.alignment = TextAnchor.MiddleCenter;
        labelStyle.fontSize = 9;
        labelStyle.normal.textColor = Color.black;

        GUI.Label(cellRect, $"{coords.q},{coords.r}", labelStyle);

        if (isDisabled)
        {
            GUIStyle disabledStyle = new GUIStyle(EditorStyles.boldLabel);
            disabledStyle.alignment = TextAnchor.MiddleCenter;
            disabledStyle.fontSize = 20;
            disabledStyle.normal.textColor = new Color(0.8f, 0.2f, 0.2f, 0.8f);
            GUI.Label(cellRect, "✕", disabledStyle);
        }
        else if (hasStack)
        {
            StackData stack = _levelData.initialStacks.First(s => s.gridPosition.Equals(coords));
            Rect stackRect = new Rect(pos.x + 5, pos.y - 10, 15, 15);

            GUIStyle stackStyle = new GUIStyle(EditorStyles.miniLabel);
            stackStyle.alignment = TextAnchor.MiddleCenter;
            stackStyle.fontSize = 10;
            stackStyle.fontStyle = FontStyle.Bold;
            stackStyle.normal.textColor = Color.white;

            GUI.Label(stackRect, stack.colorsFromBottomToTop.Count.ToString(), stackStyle);
        }
    }

    Vector2 GetCellScreenPosition(HexCoordinates coords, Rect containerRect)
    {
        float hexWidth = CellSize * 0.866f;
        float hexHeight = CellSize * 0.75f;

        float offsetX = hexWidth * (coords.q + coords.r * 0.5f);
        float offsetY = hexHeight * coords.r;

        float x = containerRect.x + 20 + offsetX;
        float y = containerRect.y + 20 + offsetY;

        return new Vector2(x, y);
    }

    Color GetCellColor(bool isDisabled, bool hasStack, bool isSelected)
    {
        if (isSelected)
            return new Color(1f, 0.8f, 0.2f, 0.9f);
        if (isDisabled)
            return new Color(0.3f, 0.3f, 0.3f, 0.5f);
        if (hasStack)
            return new Color(0.3f, 0.6f, 1f, 0.7f);

        return new Color(0.5f, 0.8f, 0.5f, 0.4f);
    }

    GUIStyle GetCellStyle(bool isSelected)
    {
        GUIStyle style = new GUIStyle(GUI.skin.box);
        if (isSelected)
        {
            style.border = new RectOffset(2, 2, 2, 2);
        }
        return style;
    }

    void HandleCellClick(Rect containerRect)
    {
        Event e = Event.current;
        if (e.type == EventType.MouseDown && e.button == 0 && containerRect.Contains(e.mousePosition))
        {
            for (int r = 0; r < _levelData.gridHeight; r++)
            {
                for (int q = 0; q < _levelData.gridWidth; q++)
                {
                    HexCoordinates coords = new HexCoordinates(q, r);
                    Vector2 cellPos = GetCellScreenPosition(coords, containerRect);
                    Rect cellRect = new Rect(cellPos.x - CellSize / 2, cellPos.y - CellSize / 2, CellSize, CellSize);

                    if (cellRect.Contains(e.mousePosition))
                    {
                        _selectedCell = coords;
                        e.Use();
                        Repaint();
                        return;
                    }
                }
            }
        }
    }

    void DrawSelectedCellInfo()
    {
        EditorGUILayout.BeginVertical(EditorStyles.helpBox);
        EditorGUILayout.LabelField($"Selected Cell: ({_selectedCell.Value.q}, {_selectedCell.Value.r})", EditorStyles.boldLabel);

        bool isDisabled = _levelData.disabledCells.Contains(_selectedCell.Value);
        StackData? stackData = _levelData.initialStacks.FirstOrDefault(s => s.gridPosition.Equals(_selectedCell.Value));
        bool hasStack = stackData.HasValue;

        EditorGUILayout.LabelField("Status:", isDisabled ? "Disabled" : (hasStack ? "Has Stack" : "Empty"));

        EditorGUILayout.Space(5);

        if (GUILayout.Button(isDisabled ? "Enable Cell" : "Disable Cell"))
        {
            Undo.RecordObject(_levelData, isDisabled ? "Enable Cell" : "Disable Cell");

            if (isDisabled)
                _levelData.disabledCells.Remove(_selectedCell.Value);
            else
                _levelData.disabledCells.Add(_selectedCell.Value);

            EditorUtility.SetDirty(_levelData);
        }

        if (hasStack)
        {
            EditorGUILayout.LabelField($"Stack Height: {stackData.Value.colorsFromBottomToTop.Count}");

            if (GUILayout.Button("Remove Stack"))
            {
                Undo.RecordObject(_levelData, "Remove Stack");
                _levelData.initialStacks.RemoveAll(s => s.gridPosition.Equals(_selectedCell.Value));
                EditorUtility.SetDirty(_levelData);
            }
        }
        else if (!isDisabled)
        {
            if (GUILayout.Button("Add Stack Here"))
            {
                Undo.RecordObject(_levelData, "Add Stack");
                _levelData.initialStacks.Add(new StackData
                {
                    gridPosition = _selectedCell.Value,
                    colorsFromBottomToTop = new List<HexColor> { HexColor.Blue }
                });
                EditorUtility.SetDirty(_levelData);
            }
        }

        EditorGUILayout.EndVertical();
    }
}
