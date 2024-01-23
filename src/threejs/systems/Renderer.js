import { WebGLRenderer } from "three";

function createRenderer(canvas) {
  const renderer = new WebGLRenderer({ antialias: true, canvas: canvas });

  renderer.physicallyCorrectLights = true;

  return renderer;
}

export { createRenderer };
