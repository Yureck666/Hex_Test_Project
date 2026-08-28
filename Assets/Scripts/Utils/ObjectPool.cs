using System.Collections.Generic;
using UnityEngine;

namespace Hex.Utils
{
    public class ObjectPool<T> where T : MonoBehaviour
    {
        readonly T _prefab;
        readonly Transform _parent;
        readonly Queue<T> _pool = new Queue<T>();

        public ObjectPool(T prefab, int initialCapacity, Transform parent = null)
        {
            _prefab = prefab;
            _parent = parent;

            for (int i = 0; i < initialCapacity; i++)
            {
                T obj = Object.Instantiate(_prefab, _parent);
                obj.gameObject.SetActive(false);
                _pool.Enqueue(obj);
            }
        }

        public T Get()
        {
            T obj;
            if (_pool.Count > 0)
            {
                obj = _pool.Dequeue();
                obj.gameObject.SetActive(true);
            }
            else
            {
                obj = Object.Instantiate(_prefab, _parent);
            }
            return obj;
        }

        public void Return(T obj)
        {
            obj.gameObject.SetActive(false);
            _pool.Enqueue(obj);
        }
    }
}
