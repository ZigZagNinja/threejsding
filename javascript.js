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




/*var loader = new THREE.ObjectLoader();

loader.load(
	// resource URL
	"images/dings.json",

	// onLoad callback
	// Here the loaded data is assumed to be an object
	function ( obj ) {
		// Add the loaded object to the scene
		scene.add( obj );
	},

	// onProgress callback
	function ( xhr ) {
		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
	},

	// onError callback
	function ( err ) {
		console.error( 'An error happened' );
	}
);*/
 





//controls 
controls = new THREE.OrbitControls(camera, renderer.domElement);


//create shape
var geometry = new THREE.BoxGeometry(1, 1, 1);
var cubeMaterials = 
[
 	new THREE.MeshPhongMaterial({color: 0x0fff0 , side: THREE.DoubleSide}), //RIGHT
 	new THREE.MeshPhongMaterial({color: 0xff00ff, side: THREE.DoubleSide}), //LEFT
 	new THREE.MeshPhongMaterial({color: 0xff8500, side: THREE.DoubleSide}), //TOP
 	new THREE.MeshPhongMaterial({color: 0xa4e4fc, side: THREE.DoubleSide}), //BOTTOM
 	new THREE.MeshPhongMaterial({color: 0x23eefc, side: THREE.DoubleSide}), //FRONT
 	new THREE.MeshPhongMaterial({color: 0xfe0003, side: THREE.DoubleSide}) //BACK
]
var cubeMaterialsBasic = 
[
 	new THREE.MeshBasicMaterial({color: 0xFFFFFF , side: THREE.DoubleSide}), //RIGHT
 	new THREE.MeshBasicMaterial({color: 0xFFFFFF, side: THREE.DoubleSide}), //LEFT
 	new THREE.MeshBasicMaterial({color: 0xFFFFFF, side: THREE.DoubleSide}), //TOP
 	new THREE.MeshBasicMaterial({color: 0xFFFFFF, side: THREE.DoubleSide}), //BOTTOM
 	new THREE.MeshBasicMaterial({color: 0xFFFFFF, side: THREE.DoubleSide}), //FRONT
 	new THREE.MeshBasicMaterial({color: 0xFFFFFF, side: THREE.DoubleSide}) //BACK
]

//create material etc.
var cube = new THREE.Mesh(geometry, cubeMaterials);
scene.add(cube);

camera.position.z = 3;





var lightBox = new THREE.BoxGeometry(1, 1, 1);
var lightBoxCube = new THREE.Mesh(lightBox, cubeMaterialsBasic);
lightBoxCube.position.set(2,2,2);
scene.add(lightBoxCube);


//light

//ambient light
var ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.5);
//scene.add(ambientLight);


//point light
var pointLight = new THREE.PointLight(0xFFFFFF, 5, 50);
pointLight.position.x = 2;
pointLight.position.y = 2;
pointLight.position.z = 2;
scene.add(pointLight);



//directional light
var direcionalLight = new THREE.DirectionalLight(0xFFFFFF, 1)
direcionalLight.position.set(2,2,2);
//scene.add(direcionalLight);




//game logic
var update = function(){



	var time = Date.now()*0.005;
	pointLight.position.x = Math.sin(time* 0.02)*10;
	pointLight.position.y = Math.cos(time* 0.02)*20;
	pointLight.position.z = Math.cos(time* 0.02)*10;

	//rotation lightbulb cube
	lightBoxCube.position.x = Math.sin(time* 0.02)*10;
        lightBoxCube.position.y = Math.cos(time* 0.02)*20;
	lightBoxCube.position.z = Math.cos(time* 0.02)*10;
	
	
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

