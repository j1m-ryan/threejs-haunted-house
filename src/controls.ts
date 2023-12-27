import { OrbitControls } from "three/examples/jsm/Addons.js";
import camera from "./camera";
import canvas from "./canvas";

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.maxDistance = 10;
controls.minDistance = 5;
controls.minPolarAngle = -Math.PI / 2.2;
controls.maxPolarAngle = Math.PI / 2.2;

export default controls;
