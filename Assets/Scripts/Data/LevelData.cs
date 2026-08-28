using System.Collections.Generic;
using UnityEngine;
using Hex.Utils;

namespace Hex.Data
{
    [CreateAssetMenu(fileName = "Level_", menuName = "Hex/Level Data")]
    public class LevelData : ScriptableObject
    {
        public int gridWidth = 5;
        public int gridHeight = 5;
        public List<HexCoordinates> disabledCells = new List<HexCoordinates>();
        public List<StackData> initialStacks = new List<StackData>();
        public List<StackData> playerStacks = new List<StackData>();
        public int tutorialTargetStackIndex;
        public HexCoordinates tutorialTargetCell;
    }
}
