using UnityEngine;
using UnityEditor;
using UnityEditor.SceneManagement;
using Hex.Core;
using Hex.Data;
using Hex.Components;

namespace Hex.Editor
{
    public static class SceneSetup
    {
        [MenuItem("Tools/Hex/Setup Scene")]
        public static void SetupScene()
        {
            GameObject gameManager = GameObject.Find("GameManager");

            if (gameManager == null)
            {
                gameManager = new GameObject("GameManager");
                Undo.RegisterCreatedObjectUndo(gameManager, "Create GameManager");
            }

            AddComponentIfMissing<GameFlowController>(gameManager);
            AddComponentIfMissing<GridManager>(gameManager);
            AddComponentIfMissing<DragDropController>(gameManager);

            GameFlowController flowController = gameManager.GetComponent<GameFlowController>();

            GameSettings settings = AssetDatabase.LoadAssetAtPath<GameSettings>("Assets/Data/GameSettings.asset");
            LevelData level = AssetDatabase.LoadAssetAtPath<LevelData>("Assets/Data/Levels/Level_Tutorial.asset");
            HexCell cellPrefab = AssetDatabase.LoadAssetAtPath<HexCell>("Assets/Prefabs/Grid/HexCell.prefab");
            HexStack stackPrefab = AssetDatabase.LoadAssetAtPath<HexStack>("Assets/Prefabs/Gameplay/HexStack.prefab");
            HexElement elementPrefab = AssetDatabase.LoadAssetAtPath<HexElement>("Assets/Prefabs/Gameplay/HexElement.prefab");

            SerializedObject so = new SerializedObject(flowController);

            so.FindProperty("gameSettings").objectReferenceValue = settings;
            so.FindProperty("levelData").objectReferenceValue = level;
            so.FindProperty("cellPrefab").objectReferenceValue = cellPrefab;
            so.FindProperty("stackPrefab").objectReferenceValue = stackPrefab;
            so.FindProperty("elementPrefab").objectReferenceValue = elementPrefab;

            Material[] materials = new Material[7];
            materials[0] = AssetDatabase.LoadAssetAtPath<Material>("Assets/Materials/Mat_White.mat");
            materials[1] = AssetDatabase.LoadAssetAtPath<Material>("Assets/Materials/Mat_Blue.mat");
            materials[2] = AssetDatabase.LoadAssetAtPath<Material>("Assets/Materials/Mat_LightBlue.mat");
            materials[3] = AssetDatabase.LoadAssetAtPath<Material>("Assets/Materials/Mat_Yellow.mat");
            materials[4] = AssetDatabase.LoadAssetAtPath<Material>("Assets/Materials/Mat_Red.mat");
            materials[5] = AssetDatabase.LoadAssetAtPath<Material>("Assets/Materials/Mat_Purple.mat");
            materials[6] = AssetDatabase.LoadAssetAtPath<Material>("Assets/Materials/Mat_Green.mat");

            SerializedProperty materialsArray = so.FindProperty("hexMaterials");
            materialsArray.arraySize = 7;
            for (int i = 0; i < 7; i++)
            {
                materialsArray.GetArrayElementAtIndex(i).objectReferenceValue = materials[i];
            }

            so.ApplyModifiedProperties();

            SetupPlayerStackTransforms(gameManager);
            SetupCamera();

            EditorSceneManager.MarkSceneDirty(EditorSceneManager.GetActiveScene());
            Debug.Log("Scene setup completed! GameManager configured with all references.");
        }

        static void SetupPlayerStackTransforms(GameObject gameManager)
        {
            Transform playerStacksParent = gameManager.transform.Find("PlayerStackPositions");
            if (playerStacksParent == null)
            {
                GameObject parent = new GameObject("PlayerStackPositions");
                parent.transform.SetParent(gameManager.transform);
                parent.transform.localPosition = Vector3.zero;
                playerStacksParent = parent.transform;
            }

            Transform[] positions = new Transform[3];
            for (int i = 0; i < 3; i++)
            {
                Transform posTransform = playerStacksParent.Find($"Position_{i}");
                if (posTransform == null)
                {
                    GameObject posObj = new GameObject($"Position_{i}");
                    posObj.transform.SetParent(playerStacksParent);
                    posObj.transform.position = new Vector3(-3f + i * 3f, 0f, -4f);
                    posTransform = posObj.transform;
                }
                positions[i] = posTransform;
            }

            GameFlowController flowController = gameManager.GetComponent<GameFlowController>();
            SerializedObject so = new SerializedObject(flowController);
            SerializedProperty transformsArray = so.FindProperty("playerStackTransforms");
            transformsArray.arraySize = 3;
            for (int i = 0; i < 3; i++)
            {
                transformsArray.GetArrayElementAtIndex(i).objectReferenceValue = positions[i];
            }
            so.ApplyModifiedProperties();

            Debug.Log("Created 3 player stack positions at (-3, 0, -4), (0, 0, -4), (3, 0, -4)");
        }

        static void SetupCamera()
        {
            Camera mainCamera = Camera.main;
            if (mainCamera == null)
            {
                GameObject cameraObj = GameObject.Find("Main Camera");
                if (cameraObj != null)
                    mainCamera = cameraObj.GetComponent<Camera>();
            }

            if (mainCamera != null)
            {
                mainCamera.transform.position = new Vector3(2.5f, 8f, -3f);
                mainCamera.transform.rotation = Quaternion.Euler(60f, 0f, 0f);
                mainCamera.orthographic = false;
                mainCamera.fieldOfView = 60f;
                Debug.Log("Camera positioned to view 5x5 hex grid");
            }
            else
            {
                Debug.LogWarning("Main Camera not found. Please position camera manually.");
            }
        }

        static T AddComponentIfMissing<T>(GameObject obj) where T : Component
        {
            T component = obj.GetComponent<T>();
            if (component == null)
            {
                component = Undo.AddComponent<T>(obj);
                Debug.Log($"Added {typeof(T).Name} component to {obj.name}");
            }
            return component;
        }
    }
}
