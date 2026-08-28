Shader "Lit/GradientFade_WebGL_Fixed"
{
    Properties
    {
        _MainTex ("Main Texture", 2D) = "white" {}
        _Mask ("Mask Texture", 2D) = "white" {}
        _Fade ("Fade", Range(0,1)) = 0.5
        _WhiteThreshold ("White Transparency Threshold", Range(0,1)) = 0.95
        _Color ("Tint", Color) = (1,1,1,1)
    }

    SubShader
    {
        Tags
        {
            "Queue"="Transparent"
            "RenderType"="Transparent"
        }

        Blend SrcAlpha OneMinusSrcAlpha
        ZWrite Off
        Cull Back
        LOD 200

        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #pragma target 2.0

            #include "UnityCG.cginc"

            sampler2D _MainTex;
            sampler2D _Mask;
            fixed4 _Color;
            fixed _Fade;
            fixed _WhiteThreshold;

            struct appdata
            {
                float4 vertex : POSITION;
                float3 normal : NORMAL;
                float2 uv : TEXCOORD0;
            };

            struct v2f
            {
                float4 pos : SV_POSITION;
                float2 uv : TEXCOORD0;
                fixed3 worldNormal : TEXCOORD1;
            };

            v2f vert (appdata v)
            {
                v2f o;
                o.pos = UnityObjectToClipPos(v.vertex);
                o.uv = v.uv;
                o.worldNormal = UnityObjectToWorldNormal(v.normal);
                return o;
            }

            fixed4 frag (v2f i) : SV_Target
            {
                fixed4 mainCol = tex2D(_MainTex, i.uv) * _Color;
                fixed maskA = tex2D(_Mask, i.uv).a;

                // ---- WHITE → TRANSPARENT ----
                fixed luminance = dot(mainCol.rgb, fixed3(0.299, 0.587, 0.114));
                fixed whiteAlpha = saturate((1.0 - luminance) / (1.0 - _WhiteThreshold));

                // ---- FADE ----
                fixed fadeValue = lerp(-1.0, 1.0, _Fade);
                fixed alpha = mainCol.a * ((1.0 - maskA) + fadeValue);
                alpha *= whiteAlpha;
                alpha = saturate(alpha);

                // ---- SIMPLE WEBGL LIGHTING ----
                fixed3 normal = normalize(i.worldNormal);

                // Fixed light direction (scene-agnostic, WebGL safe)
                fixed3 lightDir = normalize(fixed3(0.5, 0.8, 0.5));

                fixed NdotL = max(0.0, dot(normal, lightDir));

                fixed3 diffuse = mainCol.rgb * NdotL;
                fixed3 ambient = mainCol.rgb * 1; 

                return fixed4(diffuse + ambient, alpha);
            }
            ENDCG
        }
    }
}
