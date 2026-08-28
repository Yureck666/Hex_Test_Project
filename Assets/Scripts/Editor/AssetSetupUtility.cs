using UnityEngine;
using UnityEditor;
using System.IO;

namespace Hex.Editor
{
    public class AssetSetupUtility
    {
        [MenuItem("Tools/Hex/Setup All Assets")]
        public static void SetupAllAssets()
        {
            CreateMaterials();
            CreatePrefabs();
            AssetDatabase.SaveAssets();
            AssetDatabase.Refresh();
            Debug.Log("All assets created successfully!");
        }

        [MenuItem("Tools/Hex/Create Materials")]
        public static void CreateMaterials()
        {
            string materialsPath = "Assets/Materials";
            if (!AssetDatabase.IsValidFolder(materialsPath))
            {
                AssetDatabase.CreateFolder("Assets", "Materials");
            }

            CreateColorMaterial("Mat_White", Color.white, materialsPath);
            CreateColorMaterial("Mat_Blue", new Color(0.2f, 0.3f, 1f), materialsPath);
            CreateColorMaterial("Mat_LightBlue", new Color(0.4f, 0.7f, 1f), materialsPath);
            CreateColorMaterial("Mat_Yellow", new Color(1f, 0.9f, 0.2f), materialsPath);
            CreateColorMaterial("Mat_Red", new Color(1f, 0.2f, 0.2f), materialsPath);
            CreateColorMaterial("Mat_Purple", new Color(0.7f, 0.2f, 1f), materialsPath);
            CreateColorMaterial("Mat_Green", new Color(0.2f, 0.8f, 0.3f), materialsPath);

            CreateColorMaterial("Mat_Cell", new Color(0.7f, 0.7f, 0.7f), materialsPath);

            CreateEmissiveMaterial("Mat_CellHighlight", new Color(1f, 1f, 0.3f), materialsPath);

            Debug.Log("Materials created successfully!");
        }

        [MenuItem("Tools/Hex/Create Prefabs")]
        public static void CreatePrefabs()
        {
            EnsureFolderExists("Assets/Prefabs");
            EnsureFolderExists("Assets/Prefabs/Grid");
            EnsureFolderExists("Assets/Prefabs/Gameplay");

            CreateHexElementPrefab();
            CreateHexCellPrefab();
            CreateHexStackPrefab();

            Debug.Log("Prefabs created successfully!");
        }

        static void CreateColorMaterial(string name, Color color, string path)
        {
            string fullPath = $"{path}/{name}.mat";
            Material existingMat = AssetDatabase.LoadAssetAtPath<Material>(fullPath);

            if (existingMat == null)
            {
                Material mat = new Material(Shader.Find("Standard"));
                mat.color = color;
                AssetDatabase.CreateAsset(mat, fullPath);
                Debug.Log($"Created material: {fullPath}");
            }
            else
            {
                existingMat.color = color;
                EditorUtility.SetDirty(existingMat);
                Debug.Log($"Updated material: {fullPath}");
            }
        }

        static void CreateEmissiveMaterial(string name, Color color, string path)
        {
            string fullPath = $"{path}/{name}.mat";
            Material existingMat = AssetDatabase.LoadAssetAtPath<Material>(fullPath);

            if (existingMat == null)
            {
                Material mat = new Material(Shader.Find("Standard"));
                mat.color = color;
                mat.EnableKeyword("_EMISSION");
                mat.SetColor("_EmissionColor", color * 0.5f);
                mat.globalIlluminationFlags = MaterialGlobalIlluminationFlags.RealtimeEmissive;
                AssetDatabase.CreateAsset(mat, fullPath);
                Debug.Log($"Created emissive material: {fullPath}");
            }
            else
            {
                existingMat.color = color;
                existingMat.EnableKeyword("_EMISSION");
                existingMat.SetColor("_EmissionColor", color * 0.5f);
                existingMat.globalIlluminationFlags = MaterialGlobalIlluminationFlags.RealtimeEmissive;
                EditorUtility.SetDirty(existingMat);
                Debug.Log($"Updated emissive material: {fullPath}");
            }
        }

        static void CreateHexElementPrefab()
        {
            GameObject cylinder = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
            cylinder.name = "HexElement";
            cylinder.transform.localScale = new Vector3(1f, 0.2f, 1f);

            var hexElement = cylinder.AddComponent<Components.HexElement>();

            var renderer = cylinder.GetComponent<MeshRenderer>();
            Material whiteMat = AssetDatabase.LoadAssetAtPath<Material>("Assets/Materials/Mat_White.mat");
            if (whiteMat != null && renderer != null)
            {
                renderer.sharedMaterial = whiteMat;
            }

            string prefabPath = "Assets/Prefabs/Gameplay/HexElement.prefab";
            PrefabUtility.SaveAsPrefabAsset(cylinder, prefabPath);
            Object.DestroyImmediate(cylinder);

            Debug.Log($"Created prefab: {prefabPath}");
        }

        static void CreateHexCellPrefab()
        {
            GameObject prefab = new GameObject("HexCell");

            var hexCell = prefab.AddComponent<Components.HexCell>();

            GameObject cellMesh = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
            cellMesh.transform.SetParent(prefab.transform);
            cellMesh.transform.localPosition = Vector3.zero;
            cellMesh.transform.localScale = new Vector3(1f, 0.1f, 1f);
            cellMesh.name = "CellMesh";

            var cellRenderer = cellMesh.GetComponent<MeshRenderer>();
            Material cellMat = AssetDatabase.LoadAssetAtPath<Material>("Assets/Materials/Mat_Cell.mat");
            if (cellMat != null && cellRenderer != null)
            {
                cellRenderer.sharedMaterial = cellMat;
            }

            var meshCollider = cellMesh.GetComponent<MeshCollider>();
            if (meshCollider == null)
            {
                meshCollider = cellMesh.AddComponent<MeshCollider>();
            }

            GameObject highlight = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
            highlight.transform.SetParent(prefab.transform);
            highlight.transform.localPosition = Vector3.zero;
            highlight.transform.localScale = new Vector3(1.1f, 0.11f, 1.1f);
            highlight.name = "Highlight";
            highlight.SetActive(false);

            Object.DestroyImmediate(highlight.GetComponent<Collider>());

            var highlightRenderer = highlight.GetComponent<MeshRenderer>();
            Material highlightMat = AssetDatabase.LoadAssetAtPath<Material>("Assets/Materials/Mat_CellHighlight.mat");
            if (highlightMat != null && highlightRenderer != null)
            {
                highlightRenderer.sharedMaterial = highlightMat;
            }

            if (hexCell != null && highlightRenderer != null)
            {
                var so = new SerializedObject(hexCell);
                var highlightProp = so.FindProperty("highlightRenderer");
                if (highlightProp != null)
                {
                    highlightProp.objectReferenceValue = highlightRenderer;
                    so.ApplyModifiedProperties();
                }
            }

            string prefabPath = "Assets/Prefabs/Grid/HexCell.prefab";
            PrefabUtility.SaveAsPrefabAsset(prefab, prefabPath);
            Object.DestroyImmediate(prefab);

            Debug.Log($"Created prefab: {prefabPath}");
        }

        static void CreateHexStackPrefab()
        {
            GameObject prefab = new GameObject("HexStack");

            prefab.AddComponent<Components.HexStack>();

            string prefabPath = "Assets/Prefabs/Gameplay/HexStack.prefab";
            PrefabUtility.SaveAsPrefabAsset(prefab, prefabPath);
            Object.DestroyImmediate(prefab);

            Debug.Log($"Created prefab: {prefabPath}");
        }

        static void EnsureFolderExists(string path)
        {
            if (!AssetDatabase.IsValidFolder(path))
            {
                string parentPath = Path.GetDirectoryName(path).Replace('\\', '/');
                string folderName = Path.GetFileName(path);
                AssetDatabase.CreateFolder(parentPath, folderName);
            }
        }
    }
}
