import * as THREE from "three";
import { doorMaterial } from "../../shared/materials";
import { wallsHeight, wallsDepth } from "./walls";

const width = 2;
const height = wallsHeight * 0.8;

const roofGeometry = new THREE.PlaneGeometry(width, height);

const door = new THREE.Mesh(roofGeometry, doorMaterial);
door.position.z = wallsDepth / 2 + 0.01;
door.position.y += height / 2;

export default door;
