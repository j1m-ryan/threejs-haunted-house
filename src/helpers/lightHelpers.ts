import * as THREE from "three";
import { doorLight, hemisphereLight } from "../lights";

const hemisphereLightHelper = new THREE.HemisphereLightHelper(
  hemisphereLight,
  0.1
);

const doorLightHelper = new THREE.PointLightHelper(doorLight);

export { hemisphereLightHelper, doorLightHelper };
