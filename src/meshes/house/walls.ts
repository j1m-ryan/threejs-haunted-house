import * as THREE from "three";
import { wallsMaterial } from "../../shared/materials";

const wallsWidth = 4;
const wallsHeight = 2.5;
const wallsDepth = 4;

const wallsGeometry = new THREE.BoxGeometry(
  wallsWidth,
  wallsHeight,
  wallsDepth
);

const walls = new THREE.Mesh(wallsGeometry, wallsMaterial);
walls.position.y = wallsHeight / 2;

export default walls;
export { wallsHeight, wallsDepth };
