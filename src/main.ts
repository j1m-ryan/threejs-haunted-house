import { createDoubleClickListener } from "./utils/fullscreen";
import scene from "./scene";
import canvas from "./canvas";
import {
  ambientLight,
  directionalLight,
  ghost1,
  ghost2,
  ghost3,
  hemisphereLight,
} from "./lights";
import { tick } from "./timer";
import floor from "./meshes/floor";
import house from "./meshes/house";
import graves from "./meshes/graves";
import fog from "./fog";

function main() {
  scene.add(floor);
  scene.add(house);
  scene.add(graves);

  scene.add(ambientLight);
  scene.add(hemisphereLight);
  scene.add(directionalLight);
  scene.add(ghost1);
  scene.add(ghost2);
  scene.add(ghost3);

  // scene.add(axesHelper);
  // scene.add(hemisphereLightHelper);
  // scene.add(doorLightHelper);

  scene.fog = fog;

  createDoubleClickListener(canvas);

  tick();
}

main();
