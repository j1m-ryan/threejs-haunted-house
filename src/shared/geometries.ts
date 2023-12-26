import * as THREE from "three";

const bushRadius = 1;
const bushHeightSegments = 16;
const bushWidthSegments = 16;

const bushGeometry = new THREE.SphereGeometry(
  bushRadius,
  bushWidthSegments,
  bushHeightSegments
);

export { bushGeometry };
