import * as THREE from "three";
import {
  woodTexture,
  doorTexture,
  doorAlphaTexture,
  doorAmbientOcclusionTexture,
  doorHeightTexture,
  doorNormalTexture,
  doorMetalnessTexture,
  doorRoughnessTexture,
  bricksColorTexture,
  bricksNormalTexture,
  bricksAmbientOcclusionTexture,
  bricksRoughnessTexture,
  grassColorTexture,
  grassNormalTexture,
  grassAmbientOcclusionTexture,
  grassRoughnessTexture,
} from "./textures";
const woodMaterial = new THREE.MeshStandardMaterial({
  map: woodTexture,
});
woodMaterial.side = THREE.DoubleSide;

const wallsMaterial = new THREE.MeshStandardMaterial({
  map: bricksColorTexture,
  normalMap: bricksNormalTexture,
  aoMap: bricksAmbientOcclusionTexture,
  roughnessMap: bricksRoughnessTexture,
});

const doorMaterial = new THREE.MeshStandardMaterial({
  map: doorTexture,
  transparent: true,
  alphaMap: doorAlphaTexture,
  aoMap: doorAmbientOcclusionTexture,
  displacementMap: doorHeightTexture,
  displacementScale: 0.1,
  normalMap: doorNormalTexture,
  metalnessMap: doorMetalnessTexture,
  roughnessMap: doorRoughnessTexture,
});

const grassMaterial = new THREE.MeshStandardMaterial({
  map: grassColorTexture,
  normalMap: grassNormalTexture,
  aoMap: grassAmbientOcclusionTexture,
  roughnessMap: grassRoughnessTexture,
});

const bushMaterial = new THREE.MeshStandardMaterial({ color: "#89C854" });
export {
  woodMaterial,
  wallsMaterial,
  doorMaterial,
  bushMaterial,
  grassMaterial,
};
