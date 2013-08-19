THREE.ThirdPersonControls
=========================

Simple thrid person controller for THREE applications.
Take a look at the live demo [right here](http://jeremt.github.io/THREE.ThirdPersonControls/).

Usage
-----

Simple add _THREE.js_, _THREE.Input.js_ and _THREE.ThirdPersonControls.js_ into your project. After, simple create a new instance of ThirdPersonControls:

```js

var tpsControls = new THREE.ThirdPersonControls({
  camera: camera, // main camera
  target: player // THREE.Object3D
});

```

And update it at each frame:

```js

tpsControls.update(deltaTime);

```

### params

- __camera__ - reference on the main camera (required)
- __target__ - reference on the target to follow (required)
- __lerp__ - lerp value for smooth movements (optional)
- __moveSpeed__ - move speed value (optional)
- __rotateSpeed__ - rotation speed value (optional)
- __offset__ - position offset between camera and target (optional)
- __keyMapping__ - key mapping to use (azerty or qwerty)
