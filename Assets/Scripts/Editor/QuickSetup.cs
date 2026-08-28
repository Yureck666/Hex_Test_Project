using UnityEngine;
using UnityEditor;

public class QuickSetup
{
    [MenuItem("Tools/Hex Quick Setup/1 - Create Materials")]
    public static void CreateMaterials()
    {
        string path = "Assets/Materials";
        if (!AssetDatabase.IsValidFolder(path))
            AssetDatabase.CreateFolder("Assets", "Materials");

        CreateMat("Mat_White", Color.white);
        CreateMat("Mat_Blue", new Color(0.2f, 0.3f, 1f));
        CreateMat("Mat_LightBlue", new Color(0.4f, 0.7f, 1f));
        CreateMat("Mat_Yellow", new Color(1f, 0.9f, 0.2f));
        CreateMat("Mat_Red", new Color(1f, 0.2f, 0.2f));
        CreateMat("Mat_Purple", new Color(0.7f, 0.2f, 1f));
        CreateMat("Mat_Green", new Color(0.2f, 0.8f, 0.3f));
        CreateMat("Mat_Cell", new Color(0.7f, 0.7f, 0.7f));

        Material highlight = new Material(Shader.Find("Standard"));
        highlight.color = new Color(1f, 1f, 0.3f);
        highlight.EnableKeyword("_EMISSION");
        highlight.SetColor("_EmissionColor", new Color(0.5f, 0.5f, 0.1f));
        AssetDatabase.CreateAsset(highlight, "Assets/Materials/Mat_CellHighlight.mat");

        AssetDatabase.SaveAssets();
        Debug.Log("✅ Materials created!");
    }

    static void CreateMat(string name, Color color)
    {
        Material mat = new Material(Shader.Find("Standard"));
        mat.color = color;
        AssetDatabase.CreateAsset(mat, $"Assets/Materials/{name}.mat");
    }

    [MenuItem("Tools/Hex Quick Setup/2 - Create Prefabs")]
    public static void CreatePrefabs()
    {
        if (!AssetDatabase.IsValidFolder("Assets/Prefabs"))
            AssetDatabase.CreateFolder("Assets", "Prefabs");
        if (!AssetDatabase.IsValidFolder("Assets/Prefabs/Grid"))
            AssetDatabase.CreateFolder("Assets/Prefabs", "Grid");
        if (!AssetDatabase.IsValidFolder("Assets/Prefabs/Gameplay"))
            AssetDatabase.CreateFolder("Assets/Prefabs", "Gameplay");

        CreateHexElement();
        CreateHexCell();
        CreateHexStack();

        AssetDatabase.SaveAssets();
        Debug.Log("✅ Prefabs created!");
    }

    static void CreateHexElement()
    {
        GameObject go = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
        go.name = "HexElement";
        go.transform.localScale = new Vector3(1f, 0.2f, 1f);

        go.AddComponent<Hex.Components.HexElement>();

        Material mat = AssetDatabase.LoadAssetAtPath<Material>("Assets/Materials/Mat_White.mat");
        if (mat != null)
            go.GetComponent<Renderer>().sharedMaterial = mat;

        PrefabUtility.SaveAsPrefabAsset(go, "Assets/Prefabs/Gameplay/HexElement.prefab");
        Object.DestroyImmediate(go);
    }

    static void CreateHexCell()
    {
        GameObject root = new GameObject("HexCell");
        root.AddComponent<Hex.Components.HexCell>();

        GameObject cellMesh = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
        cellMesh.name = "CellMesh";
        cellMesh.transform.SetParent(root.transform);
        cellMesh.transform.localScale = new Vector3(1f, 0.1f, 1f);
        cellMesh.transform.localPosition = Vector3.zero;

        Material cellMat = AssetDatabase.LoadAssetAtPath<Material>("Assets/Materials/Mat_Cell.mat");
        if (cellMat != null)
            cellMesh.GetComponent<Renderer>().sharedMaterial = cellMat;

        GameObject highlight = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
        highlight.name = "Highlight";
        highlight.transform.SetParent(root.transform);
        highlight.transform.localScale = new Vector3(1.1f, 0.11f, 1.1f);
        highlight.transform.localPosition = Vector3.zero;
        highlight.SetActive(false);

        Material hlMat = AssetDatabase.LoadAssetAtPath<Material>("Assets/Materials/Mat_CellHighlight.mat");
        if (hlMat != null)
            highlight.GetComponent<Renderer>().sharedMaterial = hlMat;

        Object.DestroyImmediate(highlight.GetComponent<Collider>());

        SerializedObject so = new SerializedObject(root.GetComponent<Hex.Components.HexCell>());
        so.FindProperty("highlightRenderer").objectReferenceValue = highlight.GetComponent<Renderer>();
        so.ApplyModifiedPropertiesWithoutUndo();

        PrefabUtility.SaveAsPrefabAsset(root, "Assets/Prefabs/Grid/HexCell.prefab");
        Object.DestroyImmediate(root);
    }

    static void CreateHexStack()
    {
        GameObject go = new GameObject("HexStack");
        go.AddComponent<Hex.Components.HexStack>();

        PrefabUtility.SaveAsPrefabAsset(go, "Assets/Prefabs/Gameplay/HexStack.prefab");
        Object.DestroyImmediate(go);
    }

    [MenuItem("Tools/Hex Quick Setup/3 - Create Data Assets")]
    public static void CreateDataAssets()
    {
        if (!AssetDatabase.IsValidFolder("Assets/Data"))
            AssetDatabase.CreateFolder("Assets", "Data");
        if (!AssetDatabase.IsValidFolder("Assets/Data/Levels"))
            AssetDatabase.CreateFolder("Assets/Data", "Levels");

        CreateGameSettings();
        CreateLevel();

        AssetDatabase.SaveAssets();
        Debug.Log("✅ Data assets created!");
    }

    static void CreateGameSettings()
    {
        var settings = ScriptableObject.CreateInstance<Hex.Data.GameSettings>();
        AssetDatabase.CreateAsset(settings, "Assets/Data/GameSettings.asset");
    }

    static void CreateLevel()
    {
        var level = ScriptableObject.CreateInstance<Hex.Data.LevelData>();
        AssetDatabase.CreateAsset(level, "Assets/Data/Levels/Level_Tutorial.asset");
    }
}
