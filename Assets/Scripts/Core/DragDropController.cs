using UnityEngine;
using DG.Tweening;
using Hex.Data;
using Hex.Components;

namespace Hex.Core
{
    public class DragDropController : MonoBehaviour
    {
        [SerializeField] GameObject shadowPrefab;

        public event System.Action<HexStack> OnStackPickedUp;
        public event System.Action<HexStack, HexCell> OnStackPlaced;
        public event System.Action<HexStack> OnStackReturned;

        Camera _mainCamera;
        GridManager _gridManager;
        GameSettings _settings;
        ReactionSystem _reactionSystem;

        HexStack _draggedStack;
        HexCell _originalCell;
        Vector3 _dragOffset;
        HexCell _highlightedCell;
        bool _isPlayerStack;
        GameObject _shadowInstance;
        private Plane _groundPlane;
        private Plane _dragPlane;

        void Awake()
        {
            _mainCamera = Camera.main;
        }

        public void Initialize(GridManager gridManager, GameSettings settings, ReactionSystem reactionSystem = null)
        {
            _gridManager = gridManager;
            _settings = settings;
            _reactionSystem = reactionSystem;
            
            
            _groundPlane = new Plane(Vector3.up, Vector3.zero);
            _dragPlane = new Plane(Vector3.up, new Vector3(0, _settings.pickupHeight, 0));
        }

        void Update()
        {
            if (_draggedStack == null)
            {
                if (Input.GetMouseButtonDown(0))
                {
                    CheckForPickup();
                }
            }
            else
            {
                UpdateDrag();

                if (Input.GetMouseButtonUp(0))
                {
                    CheckForDrop();
                }
            }
        }

        void CheckForPickup()
        {
            if (_reactionSystem != null && _reactionSystem.IsReacting)
                return;

            Ray ray = _mainCamera.ScreenPointToRay(Input.mousePosition);
            if (Physics.Raycast(ray, out RaycastHit hit))
            {
                HexStack stack = hit.collider.GetComponentInParent<HexStack>();
                if (stack != null)
                {
                    HexCell cell = stack.GetComponentInParent<HexCell>();

                    if (cell != null)
                    {
                        return;
                    }

                    PickupStack(stack, null, true);
                }
            }
        }

        void PickupStack(HexStack stack, HexCell cell, bool isPlayerStack)
        {
            _draggedStack = stack;
            _originalCell = cell;
            _isPlayerStack = isPlayerStack;

            if (cell != null)
            {
                cell.ClearStack();
            }

            DisableStackColliders(stack);

            stack.transform.DOMoveY(_settings.pickupHeight, _settings.pickupDuration).SetEase(Ease.OutBack);

            if (shadowPrefab != null)
            {
                _shadowInstance = Instantiate(shadowPrefab);
                _shadowInstance.transform.position = new Vector3(stack.transform.position.x, 0.01f, stack.transform.position.z);
            }

            OnStackPickedUp?.Invoke(stack);
        }

        void DisableStackColliders(HexStack stack)
        {
            Collider[] colliders = stack.GetComponentsInChildren<Collider>();
            foreach (Collider col in colliders)
            {
                col.enabled = false;
            }
        }

        void EnableStackColliders(HexStack stack)
        {
            Collider[] colliders = stack.GetComponentsInChildren<Collider>();
            foreach (Collider col in colliders)
            {
                col.enabled = true;
            }
        }

        void DestroyShadow()
        {
            if (_shadowInstance != null)
            {
                Destroy(_shadowInstance);
                _shadowInstance = null;
            }
        }

        void UpdateDrag()
        {
            Ray ray = _mainCamera.ScreenPointToRay(Input.mousePosition);

            if (_dragPlane.Raycast(ray, out float distance))
            {
                Vector3 targetPos = ray.GetPoint(distance);
                targetPos.y = _draggedStack.transform.position.y;

                _draggedStack.transform.position = Vector3.Lerp(
                    _draggedStack.transform.position,
                    targetPos,
                    Time.deltaTime * _settings.dragLerpSpeed
                );
            }

            if (_shadowInstance != null)
            {
                _shadowInstance.transform.position = new Vector3(
                    _draggedStack.transform.position.x, 0.01f, _draggedStack.transform.position.z);
            }

            UpdateHighlight();
        }

        void UpdateHighlight()
        {
            Ray ray = _mainCamera.ScreenPointToRay(Input.mousePosition);

            HexCell newHighlightedCell = null;

            if (_groundPlane.Raycast(ray, out float distance))
            {
                Vector3 worldPos = ray.GetPoint(distance);
                HexCell cell = _gridManager.GetCellAtWorldPosition(worldPos);
                
                if (cell != null && cell.IsValidForPlacement)
                {
                    newHighlightedCell = cell;
                }
            }
            

            if (newHighlightedCell != _highlightedCell)
            {
                if (_highlightedCell != null)
                    _highlightedCell.HideHighlight(_settings.highlightFadeDuration);

                _highlightedCell = newHighlightedCell;

                if (_highlightedCell != null)
                    _highlightedCell.ShowHighlight(_settings.highlightFadeDuration);
            }
        }

        void CheckForDrop()
        {
            if (_highlightedCell != null)
            {
                PlaceStack(_highlightedCell);
            }
            else
            {
                ReturnStack();
            }

            if (_highlightedCell != null)
            {
                _highlightedCell.HideHighlight(_settings.highlightFadeDuration);
                _highlightedCell = null;
            }
        }

        void PlaceStack(HexCell targetCell)
        {
            HexStack stack = _draggedStack;
            bool wasPlayerStack = _isPlayerStack;

            _draggedStack = null;
            _originalCell = null;
            _isPlayerStack = false;

            DestroyShadow();

            targetCell.SetStack(stack);

            stack.transform.DOMove(targetCell.transform.position, _settings.dropDuration)
                .SetEase(Ease.InOutSine)
                .OnComplete(() =>
                {
                    EnableStackColliders(stack);
                    OnStackPlaced?.Invoke(stack, targetCell);
                });
        }

        void ReturnStack()
        {
            HexStack stack = _draggedStack;
            HexCell cell = _originalCell;
            bool wasPlayerStack = _isPlayerStack;

            _draggedStack = null;
            _originalCell = null;
            _isPlayerStack = false;

            DestroyShadow();

            if (!wasPlayerStack && cell != null)
            {
                cell.SetStack(stack);

                float distance = Vector3.Distance(stack.transform.position, cell.transform.position);
                float duration = distance / _settings.returnSpeed;

                stack.transform.DOMove(cell.transform.position, duration)
                    .SetEase(Ease.InOutSine)
                    .OnComplete(() =>
                    {
                        EnableStackColliders(stack);
                        OnStackReturned?.Invoke(stack);
                    });
            }
            else
            {
                Transform parent = stack.transform.parent;
                Vector3 returnPos = parent != null ? parent.position : stack.transform.position;
                returnPos.y = 0;

                float distance = Vector3.Distance(stack.transform.position, returnPos);
                float duration = distance / _settings.returnSpeed;

                stack.transform.DOMove(returnPos, duration)
                    .SetEase(Ease.InOutSine)
                    .OnComplete(() =>
                    {
                        EnableStackColliders(stack);
                        OnStackReturned?.Invoke(stack);
                    });
            }
        }
    }
}
