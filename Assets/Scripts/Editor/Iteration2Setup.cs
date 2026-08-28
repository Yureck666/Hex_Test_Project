using UnityEngine;
using UnityEditor;
using System.Collections.Generic;
using Hex.Data;
using Hex.Components;
using Hex.Core;

public class Iteration2Setup
{
    [MenuItem("Tools/Hex Quick Setup/6 - Setup Iteration 2 (Reactions)")]
    public static void SetupIteration2()
    {
        CreateColorMaterialMapping();
        CreateDisappearParticlePrefab();
        AddComponentsToGameManager();
        AssetDatabase.SaveAssets();
        AssetDatabase.Refresh();
        Debug.Log("✅ Iteration 2 setup complete!");
    }

    static void CreateColorMaterialMapping()
    {
        string path = "Assets/Data/ColorMaterialMapping.asset";

        ColorMaterialMapping mapping = AssetDatabase.LoadAssetAtPath<ColorMaterialMapping>(path);
        if (mapping == null)
        {
            mapping = ScriptableObject.CreateInstance<ColorMaterialMapping>();

            mapping.mappings = new List<ColorMaterialMapping.ColorMaterialPair>
            {
                new ColorMaterialMapping.ColorMaterialPair
                {
                    hexColor = HexColor.White,
                    material = AssetDatabase.LoadAssetAtPath<Material>("Assets/Materials/Mat_White.mat"),
                    particleColor = Color.white
                },
                new ColorMaterialMapping.ColorMaterialPair
                {
                    hexColor = HexColor.Blue,
                    material = AssetDatabase.LoadAssetAtPath<Material>("Assets/Materials/Mat_Blue.mat"),
                    particleColor = new Color(0.2f, 0.3f, 1f)
                },
                new ColorMaterialMapping.ColorMaterialPair
                {
                    hexColor = HexColor.LightBlue,
                    material = AssetDatabase.LoadAssetAtPath<Material>("Assets/Materials/Mat_LightBlue.mat"),
                    particleColor = new Color(0.4f, 0.7f, 1f)
                },
                new ColorMaterialMapping.ColorMaterialPair
                {
                    hexColor = HexColor.Yellow,
                    material = AssetDatabase.LoadAssetAtPath<Material>("Assets/Materials/Mat_Yellow.mat"),
                    particleColor = new Color(1f, 0.9f, 0.2f)
                },
                new ColorMaterialMapping.ColorMaterialPair
                {
                    hexColor = HexColor.Red,
                    material = AssetDatabase.LoadAssetAtPath<Material>("Assets/Materials/Mat_Red.mat"),
                    particleColor = new Color(1f, 0.2f, 0.2f)
                },
                new ColorMaterialMapping.ColorMaterialPair
                {
                    hexColor = HexColor.Purple,
                    material = AssetDatabase.LoadAssetAtPath<Material>("Assets/Materials/Mat_Purple.mat"),
                    particleColor = new Color(0.7f, 0.2f, 1f)
                },
                new ColorMaterialMapping.ColorMaterialPair
                {
                    hexColor = HexColor.Green,
                    material = AssetDatabase.LoadAssetAtPath<Material>("Assets/Materials/Mat_Green.mat"),
                    particleColor = new Color(0.2f, 0.8f, 0.3f)
                }
            };

            AssetDatabase.CreateAsset(mapping, path);
            Debug.Log($"Created ColorMaterialMapping at {path}");
        }
        else
        {
            Debug.Log("ColorMaterialMapping already exists");
        }
    }

    static void CreateDisappearParticlePrefab()
    {
        string prefabPath = "Assets/Prefabs/VFX/DisappearParticle.prefab";

        GameObject existing = AssetDatabase.LoadAssetAtPath<GameObject>(prefabPath);
        if (existing != null)
        {
            Debug.Log("DisappearParticle prefab already exists");
            return;
        }

        GameObject particleObj = new GameObject("DisappearParticle");
        ParticleSystem ps = particleObj.AddComponent<ParticleSystem>();
        particleObj.AddComponent<DisappearParticle>();

        var main = ps.main;
        main.startLifetime = 1.5f;
        main.startSpeed = 3f;
        main.startSize = 0.3f;
        main.maxParticles = 50;

        var emission = ps.emission;
        emission.rateOverTime = 0;
        emission.SetBursts(new ParticleSystem.Burst[]
        {
            new ParticleSystem.Burst(0f, 30)
        });

        var shape = ps.shape;
        shape.shapeType = ParticleSystemShapeType.Sphere;
        shape.radius = 0.5f;

        var colorOverLifetime = ps.colorOverLifetime;
        colorOverLifetime.enabled = true;
        Gradient gradient = new Gradient();
        gradient.SetKeys(
            new GradientColorKey[] { new GradientColorKey(Color.white, 0f), new GradientColorKey(Color.white, 1f) },
            new GradientAlphaKey[] { new GradientAlphaKey(1f, 0f), new GradientAlphaKey(0f, 1f) }
        );
        colorOverLifetime.color = new ParticleSystem.MinMaxGradient(gradient);

        var sizeOverLifetime = ps.sizeOverLifetime;
        sizeOverLifetime.enabled = true;
        AnimationCurve curve = new AnimationCurve(new Keyframe(0f, 1f), new Keyframe(1f, 0.2f));
        sizeOverLifetime.size = new ParticleSystem.MinMaxCurve(1f, curve);

        PrefabUtility.SaveAsPrefabAsset(particleObj, prefabPath);
        Object.DestroyImmediate(particleObj);

        Debug.Log($"Created DisappearParticle prefab at {prefabPath}");
    }

    static void AddComponentsToGameManager()
    {
        GameObject gameManager = GameObject.Find("GameManager");
        if (gameManager == null)
        {
            Debug.LogWarning("GameManager not found in scene!");
            return;
        }

        if (gameManager.GetComponent<ReactionSystem>() == null)
        {
            gameManager.AddComponent<ReactionSystem>();
            Debug.Log("Added ReactionSystem to GameManager");
        }

        if (gameManager.GetComponent<StackDisappearController>() == null)
        {
            gameManager.AddComponent<StackDisappearController>();
            Debug.Log("Added StackDisappearController to GameManager");
        }

        GameFlowController flowController = gameManager.GetComponent<GameFlowController>();
        if (flowController != null)
        {
            SerializedObject so = new SerializedObject(flowController);

            SerializedProperty colorMappingProp = so.FindProperty("colorMapping");
            if (colorMappingProp.objectReferenceValue == null)
            {
                ColorMaterialMapping mapping = AssetDatabase.LoadAssetAtPath<ColorMaterialMapping>("Assets/Data/ColorMaterialMapping.asset");
                colorMappingProp.objectReferenceValue = mapping;
            }

            SerializedProperty particlePrefabProp = so.FindProperty("disappearParticlePrefab");
            if (particlePrefabProp.objectReferenceValue == null)
            {
                GameObject prefab = AssetDatabase.LoadAssetAtPath<GameObject>("Assets/Prefabs/VFX/DisappearParticle.prefab");
                particlePrefabProp.objectReferenceValue = prefab;
            }

            so.ApplyModifiedProperties();
            Debug.Log("Assigned references to GameFlowController");
        }

        UnityEditor.SceneManagement.EditorSceneManager.MarkSceneDirty(UnityEditor.SceneManagement.EditorSceneManager.GetActiveScene());
    }
}
