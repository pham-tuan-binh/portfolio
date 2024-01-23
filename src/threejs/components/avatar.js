import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { setupModel } from "./setupModel.js";

async function loadAvatar() {
  const loader = new GLTFLoader();

  const avatar = await loader.loadAsync("/src/threejs/models/scene.gltf");

  return setupModel(avatar);
}

export { loadAvatar };
