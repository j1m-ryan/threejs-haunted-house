import * as THREE from "three";
import { lightsFolder } from "./libgui";
import { wallsDepth, wallsHeight } from "./meshes/house/walls";
import house from "./meshes/house";

const ambientLight = new THREE.AmbientLight("#b9d5ff", 0.1);

lightsFolder
  .add(ambientLight, "intensity")
  .min(0)
  .max(5)
  .step(0.01)
  .name("Ambient Light Intensity");

const hemisphereLight = new THREE.HemisphereLight("#b9d5ff", "green", 0.1);
lightsFolder
  .add(hemisphereLight, "intensity")
  .min(0)
  .max(10)
  .step(0.01)
  .name("hemisphere light intensity");

const directionalLight = new THREE.DirectionalLight("#b9d5ff", 0.3);
directionalLight.position.set(2, 2, 2);
lightsFolder
  .add(directionalLight, "intensity")
  .min(0)
  .max(10)
  .step(0.01)
  .name("directional light intensity");

directionalLight.castShadow = true;

const doorLight = new THREE.PointLight("yellow", 3, 7);
doorLight.position.z = wallsDepth / 2 + 0.1;
doorLight.position.y = wallsHeight - 0.1;
doorLight.castShadow = true;

house.add(doorLight);

const ghost1 = new THREE.PointLight("purple", 2, 3);
ghost1.position.z = 2;
ghost1.castShadow = true;

const ghost2 = new THREE.PointLight("orange", 2, 3);
ghost2.position.z = 2.5;
ghost2.castShadow = true;

const ghost3 = new THREE.PointLight("cyan", 2, 3);
ghost3.position.z = 3;
ghost3.castShadow = true;

export {
  ambientLight,
  hemisphereLight,
  directionalLight,
  doorLight,
  ghost1,
  ghost2,
  ghost3,
};
