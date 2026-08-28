using UnityEngine;

namespace Hex.Core
{
    [ExecuteInEditMode]
    [RequireComponent(typeof(Camera))]
    public class OrthographicCameraFitter : MonoBehaviour
    {
        public float requiredWidth = 10f;
        public float requiredHeight = 10f;

#if UNITY_EDITOR
        public bool showOverlay = true;
        private Material _overlayMaterial;
#endif

        private Camera _camera;

        private void Awake()
        {
            _camera = GetComponent<Camera>();
#if UNITY_EDITOR
            CreateOverlayMaterial();
#endif
        }

        private void Update()
        {
            if (_camera == null)
                _camera = GetComponent<Camera>();
            Fit();
        }

        private void Fit()
        {
            float sizeByHeight = requiredHeight / 2f;
            float sizeByWidth = requiredWidth / (2f * _camera.aspect);
            _camera.orthographicSize = Mathf.Max(sizeByHeight, sizeByWidth);
        }

#if UNITY_EDITOR
        private void CreateOverlayMaterial()
        {
            var shader = Shader.Find("Hidden/Internal-Colored");
            _overlayMaterial = new Material(shader);
            _overlayMaterial.hideFlags = HideFlags.HideAndDontSave;
            _overlayMaterial.SetInt("_SrcBlend", (int)UnityEngine.Rendering.BlendMode.SrcAlpha);
            _overlayMaterial.SetInt("_DstBlend", (int)UnityEngine.Rendering.BlendMode.OneMinusSrcAlpha);
            _overlayMaterial.SetInt("_Cull", (int)UnityEngine.Rendering.CullMode.Off);
            _overlayMaterial.SetInt("_ZWrite", 0);
        }

        private void OnPostRender()
        {
            if (!showOverlay)
                return;

            if (_overlayMaterial == null)
                CreateOverlayMaterial();

            var cam = _camera != null ? _camera : GetComponent<Camera>();
            if (cam == null)
                return;

            float camWorldWidth = 2f * cam.orthographicSize * cam.aspect;
            float camWorldHeight = 2f * cam.orthographicSize;

            float left   = 0.5f - requiredWidth  / camWorldWidth  * 0.5f;
            float right  = 0.5f + requiredWidth  / camWorldWidth  * 0.5f;
            float bottom = 0.5f - requiredHeight / camWorldHeight * 0.5f;
            float top    = 0.5f + requiredHeight / camWorldHeight * 0.5f;

            GL.PushMatrix();
            GL.LoadOrtho();
            _overlayMaterial.SetPass(0);
            GL.Begin(GL.LINES);
            GL.Color(new Color(0f, 1f, 0f, 0.9f));

            GL.Vertex3(left,  bottom, 0f); GL.Vertex3(right, bottom, 0f);
            GL.Vertex3(right, bottom, 0f); GL.Vertex3(right, top,    0f);
            GL.Vertex3(right, top,    0f); GL.Vertex3(left,  top,    0f);
            GL.Vertex3(left,  top,    0f); GL.Vertex3(left,  bottom, 0f);

            GL.End();
            GL.PopMatrix();
        }
#endif
    }
}
