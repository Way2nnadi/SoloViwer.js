
    var scene, camera, renderer;
    var geometry, material, mesh, light, litCube, newMesh;

    init();
    animate();

    function init() {

        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.z = 600;

        geometry = new THREE.CubeGeometry( 200, 200, 200 );
        material = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: true} );

        litCube = new THREE.CubeGeometry( 200, 200, 200 ); 
        newMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff} );

        newMesh = new THREE.Mesh(litCube, newMaterial)
        scene.add(newMesh);


        mesh = new THREE.Mesh( geometry, material);
        scene.add( mesh );

        renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );


        scene.add(litCube);

        document.body.appendChild( renderer.domElement );

    }

    function animate() {

        requestAnimationFrame( animate );
        newMesh.rotation.x += 0.01;
        newMesh.rotation.y += 0.01;
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
        renderer.render( scene, camera );

    }