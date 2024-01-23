import { Color, Scene } from "three";

function createScene() {
  const scene = new Scene();

  scene.background = new Color("#F5F5F5");

  return scene;
}

export { createScene };
