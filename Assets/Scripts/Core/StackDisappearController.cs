using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Hex.Data;
using Hex.Components;

namespace Hex.Core
{
    public class StackDisappearController : MonoBehaviour
    {
        GameSettings _settings;
        GridManager _gridManager;
        ColorMaterialMapping _colorMapping;
        GameObject _disappearParticlePrefab;

        public void Initialize(GameSettings settings, GridManager gridManager, ColorMaterialMapping colorMapping, GameObject particlePrefab)
        {
            _settings = settings;
            _gridManager = gridManager;
            _colorMapping = colorMapping;
            _disappearParticlePrefab = particlePrefab;
        }

        public IEnumerator DisappearStack(HexStack stack, float speedMultiplier)
        {
            List<HexElement> elements = stack.GetAllElements();
            HexColor stackColor = stack.TopColor;
            Vector3 stackPosition = stack.transform.position;

            HexCell cell = stack.GetComponentInParent<HexCell>();
            if (cell != null)
            {
                cell.ClearStack();
            }

            float duration = _settings.disappearDuration / speedMultiplier;
            float delay = _settings.disappearStartDelay / speedMultiplier;

            int pending = 0;

            for (int i = elements.Count - 1; i >= 0; i--)
            {
                HexElement element = elements[i];

                pending++;
                element.AnimateDisappear(duration, () =>
                {
                    Destroy(element.gameObject);
                    pending--;
                });

                yield return new WaitForSeconds(delay);
            }

            while (pending > 0)
                yield return null;

            SpawnParticles(stackPosition, stackColor);

            Destroy(stack.gameObject);
        }

        void SpawnParticles(Vector3 position, HexColor color)
        {
            if (_disappearParticlePrefab == null)
            {
                Debug.LogWarning("Disappear particle prefab not assigned!");
                return;
            }

            GameObject particleObj = Instantiate(_disappearParticlePrefab, position, Quaternion.identity);

            DisappearParticle particleScript = particleObj.GetComponent<DisappearParticle>();
            if (particleScript != null)
            {
                Color particleColor = _colorMapping.GetParticleColor(color);
                particleScript.Initialize(particleColor);
            }

            Destroy(particleObj, 2f);
        }
    }
}
