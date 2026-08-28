using System.Collections;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;

namespace Code.Utils
{
    [InitializeOnLoad]
    public static class RectUtil
    {
        [MenuItem("CONTEXT/RectTransform/SetAnchors")]
        static void SetAnchors(MenuCommand command)
        {
            if (command.context is RectTransform rectTransform)
            {
                var parentRecTransform = rectTransform.parent as RectTransform;

                if(rectTransform == null || parentRecTransform == null) return;

                Vector2 newAnchorsMin = new Vector2(rectTransform.anchorMin.x + rectTransform.offsetMin.x / parentRecTransform.rect.width,
                    rectTransform.anchorMin.y + rectTransform.offsetMin.y / parentRecTransform.rect.height);
                Vector2 newAnchorsMax = new Vector2(rectTransform.anchorMax.x + rectTransform.offsetMax.x / parentRecTransform.rect.width,
                    rectTransform.anchorMax.y + rectTransform.offsetMax.y / parentRecTransform.rect.height);

                rectTransform.anchorMin = newAnchorsMin;
                rectTransform.anchorMax = newAnchorsMax;
                rectTransform.offsetMin = rectTransform.offsetMax = new Vector2(0, 0);
            }
        }
        
    }
}