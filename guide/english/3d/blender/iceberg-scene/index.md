---
title: Blender Water Shader Effect
---

# This is a simple scene to render polar waters.

**_To make the cube look like water, mix the following shaders:_**

1. Glass BSDF Shader :	Roughness = 0.850
  IOR = 	1.010 ~ 1.333
  and Color = Blue
2. Mix Shader :	Factor = 0.500
3. Translucent BSDF Shader :	Color ~= 2B9489 (a bit dark greenish blue)
4. Transparent BSDF Shader :	Color ~= 3173C0 (bluish)

![Imgur](https://cdn-media-1.freecodecamp.org/imgr/msFhj0x.png) 
#### Basic Render of the Above Node Layout
![Imgur](https://cdn-media-1.freecodecamp.org/imgr/ZI8P3Qx.png)

#### More information
[Blender Tutorial - Creating a Water Material in Cycles](http://www.youtube.com/watch?feature=player_embedded&v=4m2ldp-2fJc)
