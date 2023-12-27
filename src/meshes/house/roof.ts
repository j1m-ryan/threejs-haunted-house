import * as THREE from "three";
import { wallsHeight } from "./walls";

const radius = 3.5;
const height = 1;
const raidalSegments = 4;

const roofGeometry = new THREE.ConeGeometry(radius, height, raidalSegments);

const roof = new THREE.Mesh(
  roofGeometry,
  new THREE.MeshStandardMaterial({ color: "brown" })
);
roof.position.y = wallsHeight + height / 2;
roof.rotation.y = Math.PI / 4;

export default roof;
