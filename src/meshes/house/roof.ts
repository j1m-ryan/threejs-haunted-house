import * as THREE from "three";
import { wallsMaterial } from "../../shared/materials";
import { wallsHeight } from "./walls";

const radius = 3.5;
const height = 1;
const raidalSegments = 4;

const roofGeometry = new THREE.ConeGeometry(radius, height, raidalSegments);

const roof = new THREE.Mesh(roofGeometry, wallsMaterial);
roof.position.y = wallsHeight + height / 2;
roof.rotation.y = Math.PI / 4;

export default roof;
