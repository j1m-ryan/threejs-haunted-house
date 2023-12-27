import * as THREE from "three";
import { textureLoader } from "../loadingManager";
import woodImage from "../../static/textures/wood/wood_floor_worn_diff_1k.jpg";
import bricksAmbientOcclusion from "../../static/textures/bricks/ambientOcclusion.jpg";
import bricksColor from "../../static/textures/bricks/color.jpg";
import bricksNormal from "../../static/textures/bricks/normal.jpg";
import bricksRoughness from "../../static/textures/bricks/roughness.jpg";

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

const doorColorTexture = textureLoader.load(doorColor);
doorColorTexture.colorSpace = THREE.SRGBColorSpace;

const doorAlphaTexture = textureLoader.load(doorAlpha);
const doorAmbientOcclusionTexture = textureLoader.load(doorAmbientOcclusion);
const doorHeightTexture = textureLoader.load(doorHeight);
const doorMetalnessTexture = textureLoader.load(doorMetalness);
const doorNormalTexture = textureLoader.load(doorNormal);
const doorRoughnessTexture = textureLoader.load(doorRoughness);

const bricksColorTexture = textureLoader.load(bricksColor);
bricksColorTexture.colorSpace = THREE.SRGBColorSpace;

const bricksAmbientOcclusionTexture = textureLoader.load(
  bricksAmbientOcclusion
);
const bricksNormalTexture = textureLoader.load(bricksNormal);
const bricksRoughnessTexture = textureLoader.load(bricksRoughness);

const grassColorTexture = textureLoader.load(grassColor);
grassColorTexture.colorSpace = THREE.SRGBColorSpace;

const grassAmbientOcclusionTexture = textureLoader.load(grassAmbientOcclusion);
const grassNormalTexture = textureLoader.load(grassNormal);
const grassRoughnessTexture = textureLoader.load(grassRoughness);

grassColorTexture.repeat.set(8, 8);
grassAmbientOcclusionTexture.repeat.set(8, 8);
grassNormalTexture.repeat.set(8, 8);
grassRoughnessTexture.repeat.set(8, 8);

grassColorTexture.wrapS = THREE.RepeatWrapping;
grassAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping;
grassNormalTexture.wrapS = THREE.RepeatWrapping;
grassRoughnessTexture.wrapS = THREE.RepeatWrapping;

grassColorTexture.wrapT = THREE.RepeatWrapping;
grassAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping;
grassNormalTexture.wrapT = THREE.RepeatWrapping;
grassRoughnessTexture.wrapT = THREE.RepeatWrapping;

export {
  woodTexture,
  doorColorTexture as doorTexture,
  doorAlphaTexture,
  doorAmbientOcclusionTexture,
  doorHeightTexture,
  doorMetalnessTexture,
  doorNormalTexture,
  doorRoughnessTexture,
  bricksColorTexture,
  bricksAmbientOcclusionTexture,
  bricksNormalTexture,
  bricksRoughnessTexture,
  grassColorTexture,
  grassAmbientOcclusionTexture,
  grassNormalTexture,
  grassRoughnessTexture,
};
