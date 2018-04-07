var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var width = window.innerWidth;
var height = window.innerHeight;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


//rezising 
document.addEventListener('rezise', function(){
	renderer.setSize(width, height);
	camera.aspect = width/height;
	camera.update.updateProjectionMatrix();	
});

//controls 
controls = new THREE.OrbitControls(camera, renderer.domElement);


//create shape
var geometry = new THREE.BoxGeometry(1, 1, 1);
var cubeMaterials = 
[
 	new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('images/dart.jpg'), side: THREE.DoubleSide}), //RIGHT
 	new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('images/dart.jpg'), side: THREE.DoubleSide}), //LEFT
 	new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('images/dart.jpg'), side: THREE.DoubleSide}), //TOP
 	new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('images/dart.jpg'), side: THREE.DoubleSide}), //BOTTOM
 	new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('images/dart.jpg'), side: THREE.DoubleSide}), //FRONT
 	new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('images/dart.jpg'), side: THREE.DoubleSide}) //BACK
]

//create material etc.
var material = new THREE.MeshBasicMaterial({color: 0x0FF00, wireframe: false});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 3;


//game logic
var update = function(){



	//rotation
	/*cube.rotation.x += 0.01;
	cube.rotation.y += 0.005;*/
}


//draw scene
var render = function(){
	renderer.render(scene, camera);
}


//run gameloop
var Gameloop = function(){
	requestAnimationFrame(Gameloop);

	update();
	render();
}
	

Gameloop();
