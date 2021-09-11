import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Axes helper
const axesHelper = new THREE.AxesHelper(7);
scene.add(axesHelper);

//Materials
const materialRed = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const materialYellow = new THREE.MeshBasicMaterial({ color: 0xffff00 })
const materialWhite = new THREE.MeshBasicMaterial({ color: 0xffffff })

/**
 * Objects
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)

// mesh.position.x = -1;
// mesh.position.y = 0.1;
// mesh.position.z = 0.71;
// mesh.position.set(1, 2, 3);

// scene.add(mesh)

/**
 * Objects
 */
 const group = new THREE.Group()
 group.scale.y = 2
 group.rotation.y = 0.2
 scene.add(group)
 const cube1 = new THREE.Mesh(
     new THREE.BoxGeometry(1, 1, 1),
     materialYellow
 )
 cube1.position.x = - 1.5
 group.add(cube1)
 const cube2 = new THREE.Mesh(
     new THREE.BoxGeometry(1, 1, 1),
     materialWhite
 )
 cube2.position.x = 0
 group.add(cube2)
 const cube3 = new THREE.Mesh(
     new THREE.BoxGeometry(1, 1, 1),
     materialRed
 )
 cube3.position.x = 1.5
 group.add(cube3)
// Scale
// mesh.scale.set(1, 2, 3);

// rotation
// mesh.rotation.set(1, 2, 3);


/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 6
camera.position.y = 1
camera.position.x = 1
scene.add(camera)

// camera.lookAt(mesh.position)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
