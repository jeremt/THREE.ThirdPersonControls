
~function () {

var context = new THREE.Context();
var moveDistance = 2;
var rotateAngle = 0.02;
var offset = new THREE.Vector3(0, 50, 200);

// debug
window.context = context;

context.addEventListener("start", function () {

  // FLOOR
  var floor = new THREE.Mesh(
    new THREE.PlaneGeometry(1000, 1000, 20, 20),
    new THREE.MeshBasicMaterial({
      color: 0x555555,
      wireframe: true
    })
  );
  floor.rotation.x = -Math.PI / 2;
  this.scene.add(floor);
  // create an array with six textures for a cool cube

  this.player = new THREE.Mesh(
    new THREE.CubeGeometry(50, 50, 50),
    new THREE.MeshBasicMaterial({color: 0x222222})
  );
  this.player.position.x += 25;
  this.player.position.y += 25;
  this.player.position.z += 25;
  this.scene.add( this.player );

  this.controls = new THREE.ThirdPersonControls({
    camera: this.camera,
    target: this.player,
    lerp: 0.05
  });

});

context.addEventListener("frame", function (event) {

});

context.start();

}();