using System;
using UnityEngine;

namespace Hex.Utils
{
    [Serializable]
    public struct HexCoordinates : IEquatable<HexCoordinates>
    {
        public int q;
        public int r;

        static readonly HexCoordinates[] Directions = {
            new HexCoordinates(1, 0),
            new HexCoordinates(1, -1),
            new HexCoordinates(0, -1),
            new HexCoordinates(-1, 0),
            new HexCoordinates(-1, 1),
            new HexCoordinates(0, 1)
        };

        public HexCoordinates(int q, int r)
        {
            this.q = q;
            this.r = r;
        }

        public HexCoordinates GetNeighbor(int direction)
        {
            HexCoordinates dir = Directions[direction];
            return new HexCoordinates(q + dir.q, r + dir.r);
        }

        public HexCoordinates[] GetAllNeighbors()
        {
            HexCoordinates[] neighbors = new HexCoordinates[6];
            for (int i = 0; i < 6; i++)
            {
                neighbors[i] = GetNeighbor(i);
            }
            return neighbors;
        }

        const float Sqrt3 = 1.7320508f;

        public Vector3 ToWorldPosition(float cellSize, float cellGap)
        {
            float size = cellSize + cellGap;
            float x = -size * (Sqrt3 * q + Sqrt3 / 2f * r);
            float z = size * (3f / 2f * r);
            return new Vector3(x, 0, z);
        }

        public static HexCoordinates FromWorldPosition([Bridge.Ref] Vector3 worldPos, float cellSize, float cellGap)
        {
            float size = cellSize + cellGap;
            float q = (-Sqrt3 / 3f * worldPos.x - 1f / 3f * worldPos.z) / size;
            float r = (2f / 3f * worldPos.z) / size;
            float s = -q - r;

            int rq = Mathf.RoundToInt(q);
            int rr = Mathf.RoundToInt(r);
            int rs = Mathf.RoundToInt(s);

            float qDiff = Mathf.Abs(rq - q);
            float rDiff = Mathf.Abs(rr - r);
            float sDiff = Mathf.Abs(rs - s);

            if (qDiff > rDiff && qDiff > sDiff)
                rq = -rr - rs;
            else if (rDiff > sDiff)
                rr = -rq - rs;

            return new HexCoordinates(rq, rr);
        }

        public bool Equals([Bridge.Ref] HexCoordinates other)
        {
            return q == other.q && r == other.r;
        }

        public override bool Equals(object obj)
        {
            return obj is HexCoordinates other && Equals(other);
        }

        public override int GetHashCode()
        {
            return q * 397 ^ r;
        }

        public static bool operator ==(HexCoordinates a, HexCoordinates b)
        {
            return a.Equals(b);
        }

        public static bool operator !=(HexCoordinates a, HexCoordinates b)
        {
            return !a.Equals(b);
        }

        public override string ToString()
        {
            return $"({q}, {r})";
        }
    }
}
