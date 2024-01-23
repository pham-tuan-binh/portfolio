import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { setupModel } from "./setupModel.js";
import scene from "../models/scene.gltf";

async function loadAvatar() {
  const loader = new GLTFLoader();

  const avatar = await loader.loadAsync(scene);

  return setupModel(avatar);
}

export { loadAvatar };
