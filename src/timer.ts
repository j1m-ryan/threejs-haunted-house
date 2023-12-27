import { Timer } from "three/examples/jsm/misc/Timer.js";
import { resizeRendererToDisplaySize } from "./utils/resize";
import cube from "./meshes/cube";
import sphere from "./meshes/sphere";
import torus from "./meshes/torus";
import renderer from "./renderer";
import camera from "./camera";
import scene from "./scene";
import controls from "./controls";
import stats from "./utils/stats";
import { ghost1, ghost2, ghost3 } from "./lights";

const timer = new Timer();

export default timer;

export const tick = () => {
  stats.begin();
  const elapsedTime = timer.getElapsed();
  timer.update();

  ghost1.position.x = Math.sin(elapsedTime) * 4;
  ghost1.position.z = Math.cos(elapsedTime) * 4;
  ghost1.position.y = Math.cos(elapsedTime) + Math.cos(elapsedTime * 0.5) * 4.5;

  ghost2.position.x = -Math.sin(elapsedTime) * 4.5;
  ghost2.position.z = Math.cos(elapsedTime) * 4.3;
  ghost2.position.y = Math.cos(elapsedTime) * 2;

  ghost3.position.x = -Math.sin(elapsedTime) * 5;
  ghost3.position.z = Math.cos(elapsedTime) * 4.5 + Math.cos(elapsedTime) * 4.5;
  ghost3.position.y = Math.cos(elapsedTime) * 4.5;

  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  renderer.render(scene, camera);
  controls.update();
  stats.end();
  requestAnimationFrame(tick);
};
