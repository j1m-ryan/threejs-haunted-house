import * as THREE from "three";

import { grassMaterial, woodMaterial } from "../shared/materials";

const geometry = new THREE.PlaneGeometry(20, 20, 20);

const floor = new THREE.Mesh(geometry, grassMaterial);
floor.rotation.x = -Math.PI / 2;
floor.position.y = 0;

floor.receiveShadow = true;

export default floor;
