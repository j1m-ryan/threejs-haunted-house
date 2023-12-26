import * as THREE from "three";
import walls from "./walls";
import roof from "./roof";
import door from "./door";
import { bushGeometry } from "../../shared/geometries";
import { bushMaterial } from "../../shared/materials";
const house = new THREE.Group();
house.add(walls);
house.add(roof);
house.add(door);

const bush1 = new THREE.Mesh(bushGeometry, bushMaterial);
bush1.scale.set(0.5, 0.5, 0.5);
bush1.position.set(1.3, 0.4, 2.4);

const bush2 = new THREE.Mesh(bushGeometry, bushMaterial);
bush2.scale.set(0.3, 0.4, 0.2);
bush2.position.set(-1.3, 0.4, 2.4);

const bush3 = new THREE.Mesh(bushGeometry, bushMaterial);
bush3.scale.set(0.2, 0.3, 0.15);
bush3.position.set(-1.5, 0.2, 2.6);

const bush4 = new THREE.Mesh(bushGeometry, bushMaterial);
bush4.scale.set(0.25, 0.3, 0.2);
bush4.position.set(1.7, 0.2, 2.9);

house.add(bush1);
house.add(bush2);
house.add(bush3);
house.add(bush4);

export default house;
