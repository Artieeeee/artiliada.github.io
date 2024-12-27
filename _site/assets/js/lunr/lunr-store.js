var store = [{
        "title": "Did a little PCG, so you don't have to.",
        "excerpt":"Made a simple PCG Graph, pretending to be “Grass landscape framework 2.0”. You could use this as replacement or use both with conventional method. This can cover all collidable surfaces in the world, not only landscapes. Cull by hit phys material and landscape layer, weight distribute meshes, spawn grass from...","categories": [],
        "tags": [],
        "url": "/2024/12/27/Did-pcg-so-you-dont-have-to.html",
        "teaser": null
      },{
        "title": "State of GTAO in Unreal",
        "excerpt":"Unreal engine uses its own in-house solution for Screen Space AO, which is, subjectively, not best fit in every case, but what if I told you, there superior gem hidden from us for a while? I did not found mentions of GTAO unreal engine since 4.24 in Google and Unreal...","categories": [],
        "tags": [],
        "url": "/2024/12/27/GTAO.html",
        "teaser": null
      },{
        "title": "Simple and Efficent solution to Texture Repetition",
        "excerpt":"Original author iq , Technique III MF //input float2 x UV //input float v Some Offset //input iChannel0 tex base //input iChannel1 tex noise //https://iquilezles.org/articles/texturerepetition/ // //Technique III SamplerState stateq = GetMaterialSharedSampler(Material.Texture2D_0Sampler,Material.Wrap_WorldGroupSettings); float k = iChannel1.Sample(stateq , 0.005*x ).x; // cheap (cache friendly) lookup float2 duvdx = ddx( x );...","categories": [],
        "tags": [],
        "url": "/2024/12/27/NoTileMemoryEfficentSolution.html",
        "teaser": null
      },{
        "title": "Super Performant Damage Numbers for your game",
        "excerpt":"Read this to have the context. NiagaraDataChannels could be used not only to efficently spawn explosions, footsteps and dusts, but also for… numbers. There is more then 200000 sprite particles of different numbers with different colors and length. The question, why do we need so much??? Idk 😂 A bit...","categories": [],
        "tags": [],
        "url": "/2024/12/27/Super-Efficent-Damage-Numbers-For-ARPG.html",
        "teaser": null
      }]
