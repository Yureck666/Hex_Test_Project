using UnityEngine;

namespace Hex.Components
{
    [RequireComponent(typeof(ParticleSystem))]
    public class DisappearParticle : MonoBehaviour
    {
        ParticleSystem _particleSystem;

        void Awake()
        {
            _particleSystem = GetComponent<ParticleSystem>();
        }

        public void Initialize(Color color)
        {
            _particleSystem.Stop(true, ParticleSystemStopBehavior.StopEmittingAndClear);

            var main = _particleSystem.main;
            main.startColor = color;

            _particleSystem.Play();
        }
    }
}
