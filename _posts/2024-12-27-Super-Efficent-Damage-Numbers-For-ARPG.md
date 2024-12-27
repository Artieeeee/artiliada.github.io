---
title:  "Super Performant Damage Numbers for your game"
excerpt: "or any numbers"
---

Read 
[this](https://dev.epicgames.com/community/learning/tutorials/RJbm/unreal-engine-niagara-data-channels-intro)
to have the context.

NiagaraDataChannels could be used not only to efficently spawn explosions, footsteps and dusts, but also for... numbers.

![FastAf](/assets/fastaf.gif)

There is more then 200000 sprite particles of different numbers with different colors and length.
The question, why do we need so much??? 

Idk 😂

![Numberscolored.gif](/assets/numberscolored.gif)

A bit about how i accomplished this
* Look and took inspiration from DebugScalarValueNode
* Passing not only the Value of damage, but also length of "damage", color and digit(in case we want to render special symbols) in niagara
* Niagara scales length of sprite plane with length of "damage"
* Niagara passing some of values to material via ParticleColor and DynamicParameter
* To render special characters like "!", lets say when critical strike is accomplished, multipliying damage number by 10 and passing another parameter with digit offset
