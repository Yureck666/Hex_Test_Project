# SerializableCurve — паттерн AnimationCurve для Luna

## Проблема

`AnimationCurve` не поддерживается Bridge.NET / Luna. Нужна обёртка, которая:
- В редакторе — обычный `AnimationCurve` (удобная кривая в инспекторе)
- В билде — `SerializableCurve` (массивы float[], Luna-совместимый)

## Класс SerializableCurve

Расположение: `Assets/Scripts/PhysicsBaking/SerializableCurve.cs`

```csharp
[Serializable]
public class SerializableCurve
{
    [SerializeField] private float[] times;
    [SerializeField] private float[] values;

    public SerializableCurve(float[] times, float[] values);
    public float Evaluate(float time); // линейная интерполяция между точками
}
```

## Паттерн использования

### 1. Объявление полей

Два поля: `AnimationCurve` для редактора + `SerializableCurve` скрытый для рантайма.

```csharp
[SerializeField] private AnimationCurve myCurveEditor = AnimationCurve.EaseInOut(0f, 0f, 1f, 1f);
[HideInInspector, SerializeField] private SerializableCurve myCurve;
```

### 2. Конвертация в OnValidate

```csharp
private void OnValidate()
{
    BakeCurve(myCurveEditor, ref myCurve);
}

private static void BakeCurve(AnimationCurve source, ref SerializableCurve target, int samples = 32)
{
    if (source == null || source.length == 0)
    {
        target = new SerializableCurve(new float[0], new float[0]);
        return;
    }
    var times = new float[samples];
    var values = new float[samples];
    float start = source.keys[0].time;
    float end = source.keys[source.length - 1].time;
    for (int i = 0; i < samples; i++)
    {
        float t = (float)i / (samples - 1);
        float time = Mathf.Lerp(start, end, t);
        times[i] = time;
        values[i] = source.Evaluate(time);
    }
    target = new SerializableCurve(times, values);
}
```

### 3. В рантайме использовать только SerializableCurve

```csharp
float value = myCurve.Evaluate(normalizedTime);
```

## Правила

- `AnimationCurve` поле — только для инспектора, в рантайм-коде **не обращаться**
- `SerializableCurve` — `[HideInInspector]`, только оно идёт в рантайм
- `OnValidate` вызывается автоматически при изменении в инспекторе и перед билдом
- 32 сэмпла по умолчанию — достаточно для плавных кривых, увеличить если нужна точность
- `BakeCurve` — статический, переиспользовать для нескольких кривых в одном компоненте
