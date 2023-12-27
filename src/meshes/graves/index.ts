import * as THREE from "three";

const graves = new THREE.Group();

const geometry = new THREE.BoxGeometry(0.6, 0.8, 0.2);

const material = new THREE.MeshStandardMaterial({ color: "#b2b6b1" });

for (let index = 0; index < 50; index++) {
  const angle = Math.random() * Math.PI * 2.5;
  const radius = 5 + Math.random() * 4;
  const x = Math.sin(angle) * radius;
  const z = Math.cos(angle) * radius;
  const grave = new THREE.Mesh(geometry, material);
  grave.castShadow = true;
  grave.position.set(x, 0.3, z);
  grave.rotation.y = (Math.random() - 0.5) * 0.4;
  grave.rotation.z = (Math.random() - 0.5) * 0.4;

  graves.add(grave);
}
graves.castShadow = true;
graves.receiveShadow = true;
export default graves;
