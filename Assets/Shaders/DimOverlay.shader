Shader "UI/DimOverlay"
{
    Properties
    {
        [PerRendererData] _MainTex ("Sprite Texture", 2D) = "white" {}
        _Color ("Tint", Color) = (0,0,0,0.75)

        _Hole1UV ("Hole 1 Viewport UV", Vector) = (-1,-1,0,0)
        _Hole1Radius ("Hole 1 Radius", Float) = 0.15
        _Hole2UV ("Hole 2 Viewport UV", Vector) = (-1,-1,0,0)
        _Hole2Radius ("Hole 2 Radius", Float) = 0.15
        _HoleSoftness ("Edge Softness", Float) = 0.015

        _StencilComp ("Stencil Comparison", Float) = 8
        _Stencil ("Stencil ID", Float) = 0
        _StencilOp ("Stencil Operation", Float) = 0
        _StencilWriteMask ("Stencil Write Mask", Float) = 255
        _StencilReadMask ("Stencil Read Mask", Float) = 255
        _ColorMask ("Color Mask", Float) = 15
    }

    SubShader
    {
        Tags
        {
            "Queue"="Transparent"
            "IgnoreProjector"="True"
            "RenderType"="Transparent"
            "PreviewType"="Plane"
        }

        Stencil
        {
            Ref [_Stencil]
            Comp [_StencilComp]
            Pass [_StencilOp]
            ReadMask [_StencilReadMask]
            WriteMask [_StencilWriteMask]
        }

        Cull Off
        Lighting Off
        ZWrite Off
        ZTest [unity_GUIZTestMode]
        Blend SrcAlpha OneMinusSrcAlpha
        ColorMask [_ColorMask]

        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #pragma target 2.0

            #include "UnityCG.cginc"

            struct appdata_t
            {
                float4 vertex : POSITION;
                float4 color  : COLOR;
                float2 uv     : TEXCOORD0;
            };

            struct v2f
            {
                float4 vertex    : SV_POSITION;
                fixed4 color     : COLOR;
                float2 uv        : TEXCOORD0;
                float2 screenUV  : TEXCOORD1;
            };

            sampler2D _MainTex;
            float4 _MainTex_ST;
            fixed4 _Color;

            float4 _Hole1UV;
            float  _Hole1Radius;
            float4 _Hole2UV;
            float  _Hole2Radius;
            float  _HoleSoftness;

            v2f vert(appdata_t v)
            {
                v2f OUT;
                float4 clipPos = UnityObjectToClipPos(v.vertex);
                OUT.vertex = clipPos;
                OUT.uv = TRANSFORM_TEX(v.uv, _MainTex);
                OUT.color = v.color * _Color;

                float2 ndc = clipPos.xy / clipPos.w;
                OUT.screenUV = ndc * 0.5 + 0.5;
                OUT.screenUV.y = 1.0 - OUT.screenUV.y;

                return OUT;
            }

            float holeAlpha(float2 uv, float4 holeUV, float radius, float softness)
            {
                if (holeUV.x < 0.0)
                    return 1.0;

                float aspect = _ScreenParams.x / _ScreenParams.y;
                float2 delta = uv - holeUV.xy;
                delta.x *= aspect;
                float dist = length(delta);
                return smoothstep(radius - softness, radius + softness, dist);
            }

            fixed4 frag(v2f IN) : SV_Target
            {
                fixed4 color = IN.color * tex2D(_MainTex, IN.uv);

                float a1 = holeAlpha(IN.screenUV, _Hole1UV, _Hole1Radius, _HoleSoftness);
                float a2 = holeAlpha(IN.screenUV, _Hole2UV, _Hole2Radius, _HoleSoftness);

                color.a *= min(a1, a2);

                return color;
            }
            ENDCG
        }
    }
}
