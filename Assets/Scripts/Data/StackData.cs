using System;
using System.Collections.Generic;
using Hex.Utils;

namespace Hex.Data
{
    [Serializable]
    public struct StackData
    {
        public HexCoordinates gridPosition;
        public List<HexColor> colorsFromBottomToTop;
    }
}
