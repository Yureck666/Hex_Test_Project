using System.Collections.Generic;
using UnityEngine;
using Hex.Data;
using Hex.Utils;
using Hex.Components;

namespace Hex.Core
{
    public class GridManager : MonoBehaviour
    {
        readonly Dictionary<HexCoordinates, HexCell> _cells = new Dictionary<HexCoordinates, HexCell>();
        Transform _gridParent;
        GameSettings _settings;

        public void Initialize(LevelData levelData, GameSettings settings, HexCell cellPrefab)
        {
            _settings = settings;
            _gridParent = new GameObject("Grid").transform;
            _gridParent.SetParent(transform);

            GenerateGrid(levelData, cellPrefab);
        }

        void GenerateGrid(LevelData levelData, HexCell cellPrefab)
        {
            for (int r = 0; r < levelData.gridHeight; r++)
            {
                for (int q = 0; q < levelData.gridWidth; q++)
                {
                    HexCoordinates coords = new HexCoordinates(q, r);
                    bool isDisabled = levelData.disabledCells.Contains(coords);

                    Vector3 worldPos = coords.ToWorldPosition(_settings.cellSize, _settings.cellGap);
                    HexCell cell = Instantiate(cellPrefab, worldPos, Quaternion.identity, _gridParent);
                    cell.name = $"Cell_{coords}";
                    cell.Initialize(coords, isDisabled);

                    _cells[coords] = cell;
                }
            }
        }

        public void CreateInitialStacks(List<StackData> stacksData, ObjectPool<HexElement> elementPool, HexStack stackPrefab, Material[] materials)
        {
            foreach (StackData data in stacksData)
            {
                HexCell cell = GetCell(data.gridPosition);
                if (cell == null) continue;

                HexStack stack = Instantiate(stackPrefab, cell.transform.position, Quaternion.identity);
                stack.transform.SetParent(cell.transform);
                stack.name = $"Stack_{data.gridPosition}";
                stack.Initialize(data.colorsFromBottomToTop, _settings.stackElementGap, elementPool, materials);

                cell.SetStack(stack);
            }
        }

        public HexCell GetCell(HexCoordinates coords)
        {
            return _cells.GetValueOrDefault(coords);
        }

        public bool IsValidCell(HexCoordinates coords)
        {
            return _cells.ContainsKey(coords) && _cells[coords].IsValidForPlacement;
        }

        public List<HexCell> GetNeighbors(HexCoordinates coords)
        {
            List<HexCell> neighbors = new List<HexCell>();
            foreach (HexCoordinates neighborCoords in coords.GetAllNeighbors())
            {
                HexCell cell = GetCell(neighborCoords);
                if (cell != null)
                    neighbors.Add(cell);
            }
            return neighbors;
        }

        public HexCell GetCellAtWorldPosition(Vector3 worldPos)
        {
            HexCoordinates coords = HexCoordinates.FromWorldPosition(worldPos, _settings.cellSize, _settings.cellGap);
            return GetCell(coords);
        }

        public List<HexStack> GetAllStacks()
        {
            List<HexStack> stacks = new List<HexStack>();
            foreach (HexCell cell in _cells.Values)
            {
                if (cell.IsOccupied)
                    stacks.Add(cell.CurrentStack);
            }
            return stacks;
        }
    }
}
