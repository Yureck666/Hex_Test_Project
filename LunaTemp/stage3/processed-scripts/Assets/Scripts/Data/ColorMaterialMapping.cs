using System;
using System.Collections.Generic;
using UnityEngine;

namespace Hex.Data
{
    [CreateAssetMenu(fileName = "ColorMaterialMapping", menuName = "Hex/Color Material Mapping")]
    public class ColorMaterialMapping : ScriptableObject
    {
        [Serializable]
        public struct ColorMaterialPair
        {
            public HexColor hexColor;
            public Material material;
            public Color particleColor;
        }

        public List<ColorMaterialPair> mappings = new List<ColorMaterialPair>();

        public Material GetMaterial(HexColor color)
        {
            foreach (ColorMaterialPair pair in mappings)
            {
                if (pair.hexColor == color)
                    return pair.material;
            }
            return null;
        }

        public Color GetParticleColor(HexColor color)
        {
            foreach (ColorMaterialPair pair in mappings)
            {
                if (pair.hexColor == color)
                    return pair.particleColor;
            }
            return Color.white;
        }
    }
}
