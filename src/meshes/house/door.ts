import * as THREE from "three";
import { doorMaterial } from "../../shared/materials";
import { wallsHeight, wallsDepth } from "./walls";

const width = 2.2;
const height = wallsHeight * 0.8;

const doorGeometry = new THREE.PlaneGeometry(width, height, 100, 100);

const door = new THREE.Mesh(doorGeometry, doorMaterial);
door.position.z = wallsDepth / 2 + 0.01;
door.position.y += height / 2 - 0.06;

export default door;
