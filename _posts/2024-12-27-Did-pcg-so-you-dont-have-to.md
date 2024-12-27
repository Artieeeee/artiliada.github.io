---
title:  "Did a little PCG, so you don't have to."
excerpt: "(if you dont want and still wish to be happy)"
---


Made a simple PCG Graph, pretending to be "Grass landscape framework 2.0". You could use this as replacement or use both with conventional method.
This can cover all collidable surfaces in the world, not only landscapes. 
Cull by hit phys material and landscape layer, weight distribute meshes, spawn grass from down to up.

![PCG Graph](/assets/pcggraph.png)

I suggest not to up density too high, since PCG stressing Garbage Collector while spawning and destroying instances a bit. That could lead to hitches.
Everything else is nearly free though.

Also the little silly gif from my game as demonstration.

![PCG Demonstration](/assets/pcggifcool.gif)

Download link, compatible with UE 5.5:
[Link]((/assets/PCG_InstancedGrass.uasset))
