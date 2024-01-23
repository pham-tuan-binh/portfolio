import { PerspectiveCamera } from "three";

function createCamera() {
  const camera = new PerspectiveCamera(10, 1, 25, 50);

  camera.position.set(0, 0, -32.028);
  camera.rotation.set(Math.PI, 0, Math.PI);

  return camera;
}

export { createCamera };
