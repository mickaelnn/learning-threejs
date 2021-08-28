import './style.css'
import * as THREE from 'three'

console.log(THREE);

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1, 1, 1)
const materialRed = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const materialYellow = new THREE.MeshBasicMaterial({ color: 0xffff00 })
const materialWhite = new THREE.MeshBasicMaterial({ color: 0xffffff })
const mesh = new THREE.Mesh(geometry, materialRed)
const sphereGeometry = new THREE.SphereGeometry(1,5, 45, 45)
const meshSphere = new THREE.Mesh(sphereGeometry, materialYellow)
const cylinder = new THREE.CylinderGeometry(0.75, 0.75, 3, 6)
const altCylinder = new THREE.CylinderGeometry(0.73, 0.73, 3, 6)
const meshCylinder = new THREE.Mesh(cylinder, materialYellow)
const meshAltCylinder = new THREE.Mesh(altCylinder, materialWhite)

const sizes = {
  width: 800,
  height: 600
}
const camera = new THREE.PerspectiveCamera(90, sizes.width / sizes.height)

scene.add( mesh )
scene.add( meshSphere )
scene.add( meshCylinder )
scene.add( meshAltCylinder )
scene.add( camera )

const canvas = document.querySelector('canvas.webgl')

const renderer = new THREE.WebGLRenderer({
  canvas
})
renderer.setSize(sizes.width, sizes.height)

camera.position.z = 3
mesh.position.x=2
meshCylinder.position.x=-2
meshAltCylinder.position.x=-2
meshAltCylinder.position.y=1


renderer.render(scene, camera)
