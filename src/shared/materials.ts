import * as THREE from "three";
import { woodTexture, doorTexture } from "./textures";
const woodMaterial = new THREE.MeshStandardMaterial({
  map: woodTexture,
});
woodMaterial.side = THREE.DoubleSide;

const wallsMaterial = new THREE.MeshStandardMaterial({
  map: woodTexture,
});

const doorMaterial = new THREE.MeshStandardMaterial({
  map: doorTexture,
});

const bushMaterial = new THREE.MeshStandardMaterial({ color: "#89C854" });
export { woodMaterial, wallsMaterial, doorMaterial, bushMaterial };
