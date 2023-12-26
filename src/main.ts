import { createDoubleClickListener } from "./utils/fullscreen";
import scene from "./scene";
import canvas from "./canvas";
import { ambientLight, directionalLight, hemisphereLight } from "./lights";
import { tick } from "./timer";
import floor from "./meshes/floor";
import axesHelper from "./helpers/axesHelper";
import { hemisphereLightHelper } from "./helpers/lightHelpers";
import house from "./meshes/house";

function main() {
  scene.add(floor);
  scene.add(house);

  scene.add(ambientLight);
  scene.add(hemisphereLight);
  scene.add(directionalLight);

  scene.add(axesHelper);
  scene.add(hemisphereLightHelper);

  createDoubleClickListener(canvas);

  tick();
}

main();
