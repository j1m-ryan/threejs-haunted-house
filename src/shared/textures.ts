import * as THREE from "three";
import { textureLoader } from "../loadingManager";
import woodImage from "../../static/textures/wood/wood_floor_worn_diff_1k.jpg";
import bricksAmbientOcclusion from "../../static/textures/bricks/ambientOcclusion.jpg";
import bricksAmbientColor from "../../static/textures/bricks/color.jpg";
import bricksAmbientNormal from "../../static/textures/bricks/normal.jpg";
import bricksAmbientRoughness from "../../static/textures/bricks/roughness.jpg";

import doorAlpha from "../../static/textures/door/alpha.jpg";
import doorAmbientOcclusion from "../../static/textures/door/ambientOcclusion.jpg";
import doorColor from "../../static/textures/door/color.jpg";
import doorHeight from "../../static/textures/door/height.jpg";
import doorMetalness from "../../static/textures/door/metalness.jpg";
import doorNormal from "../../static/textures/door/normal.jpg";
import doorRoughness from "../../static/textures/door/roughness.jpg";

import grassAmbientOcclusion from "../../static/textures/grass/ambientOcclusion.jpg";
import grassColor from "../../static/textures/grass/color.jpg";
import grassNormal from "../../static/textures/grass/normal.jpg";
import grassRoughness from "../../static/textures/grass/roughness.jpg";

const woodTexture = textureLoader.load(woodImage);
woodTexture.colorSpace = THREE.SRGBColorSpace;

const doorTexture = textureLoader.load(doorColor);
doorTexture.colorSpace = THREE.SRGBColorSpace;

export { woodTexture, doorTexture };
