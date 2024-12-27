---
title:  "Simple and Efficent solution to Texture Repetition"
excerpt: "Only 3 Samplers, 40~instructions"
--- 

Original author 
[iq](https://iquilezles.org/articles/texturerepetition/)
, Technique III


![IqNoTile](/assets/IqNoTile.png)

MF

![iqNoTileNode](/assets/IqNoTileNode.png)


```hlsl
//input float2 x UV
//input float v Some Offset
//input iChannel0 tex base
//input iChannel1 tex noise

//https://iquilezles.org/articles/texturerepetition/
//
//Technique III

SamplerState stateq = GetMaterialSharedSampler(Material.Texture2D_0Sampler,Material.Wrap_WorldGroupSettings);

float k = iChannel1.Sample(stateq , 0.005*x ).x; // cheap (cache friendly) lookup
    
float2 duvdx = ddx( x );
float2 duvdy = ddy( x );
    
float l = k*8.0;
float f = frac(l);

//iq one
float ia = floor(l); // my method
float ib = ia + 1.0;

//suslik one
//    float ia = floor(l+0.5); // suslik's method (see comments)
//    float ib = floor(l);
//    f = min(f, 1.0-f)*2.0;
  

float2 offa = sin(float2(3.0,7.0)*ia); // can replace with any other hash
float2 offb = sin(float2(3.0,7.0)*ib); // can replace with any other hash

float4 cola = iChannel0.SampleGrad(stateq, x + v*offa, duvdx, duvdy );
float4 colb = iChannel0.SampleGrad(stateq, x + v*offb, duvdx, duvdy );
    
float4 difab = cola-colb;

//for normal
//return UnpackNormalMap(lerp( cola, colb, smoothstep(0.2,0.8,f-0.1*(difab.x+difab.y+difab.z)) ));
return lerp( cola, colb, smoothstep(0.2,0.8,f-0.1*(difab.x+difab.y+difab.z)) );
```

[Download MF_AntiRepetitionTextureSample_Technique_3.uasset](/assets/MF_AntiRepetitionTextureSample_Technique_3.uasset)