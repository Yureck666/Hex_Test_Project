using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
using Hex.Data;
using Hex.Utils;

namespace Hex.Components
{
    public class HexStack : MonoBehaviour
    {
        readonly List<HexElement> _elements = new List<HexElement>();
        float _elementGap;

        public int Height => _elements.Count;
        public HexColor TopColor => _elements.Count > 0 ? _elements[_elements.Count - 1].Color : HexColor.White;
        public bool IsEmpty => _elements.Count == 0;
        public bool IsDisappearing { get; set; }

        public void Initialize(List<HexColor> colors, float elementGap, ObjectPool<HexElement> pool, Material[] materials)
        {
            _elementGap = elementGap;

            for (int i = 0; i < colors.Count; i++)
            {
                HexElement element = pool.Get();
                element.transform.SetParent(transform);
                element.Initialize(colors[i], materials[(int)colors[i]]);
                _elements.Add(element);
            }

            UpdateElementPositions(false);
        }

        public void AddElement(HexElement element)
        {
            element.transform.SetParent(transform);
            _elements.Add(element);
            UpdateElementPositions(true);
        }

        public HexElement RemoveTop()
        {
            if (_elements.Count == 0)
                return null;

            HexElement element = _elements[_elements.Count - 1];
            _elements.RemoveAt(_elements.Count - 1);
            element.transform.SetParent(null);
            UpdateElementPositions(true);
            return element;
        }

        public void UpdateElementPositions(bool animate)
        {
            float baseOffset = 0.15f;

            for (int i = 0; i < _elements.Count; i++)
            {
                Vector3 targetPos = new Vector3(0, baseOffset + i * _elementGap, 0);

                if (animate)
                {
                    _elements[i].transform.DOLocalMove(targetPos, 0.2f).SetEase(Ease.OutBack);
                }
                else
                {
                    _elements[i].transform.localPosition = targetPos;
                }
            }
        }

        public List<HexElement> GetAllElements()
        {
            return new List<HexElement>(_elements);
        }
    }
}
