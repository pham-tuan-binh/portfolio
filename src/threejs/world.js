import { createCamera } from "./components/camera.js";
import { createScene } from "./components/scene.js";
import { loadAvatar } from "./components/avatar.js";

import { createRenderer } from "./systems/Renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop.js";
import { bound } from "../utils/math.js";
import { getCenter } from "../utils/element.js";

import { HemisphereLight, Vector2, MathUtils } from "three";

let camera;
let renderer;
let scene;
let loop;

class World {
  constructor(canvas) {
    camera = createCamera();
    renderer = createRenderer(canvas);
    scene = createScene();

    const ambientLight = new HemisphereLight(
      "white", // bright sky color
      "white", // dim ground color
      2 // intensity
    );

    scene.add(ambientLight);

    loop = new Loop(camera, scene, renderer);

    this.canvas = canvas;
  }

  async init() {
    const avatarScene = await loadAvatar();
    const avatar = avatarScene[5];

    avatar.tick = () => {
      let width = window.innerWidth;
      console.log(width);
      ``;
      if (width > 640) {
        const mouse = new Vector2(document.mousePosX, document.mousePosY);
        const center = getCenter(this.canvas);

        let degreeX = MathUtils.degToRad(
          MathUtils.clamp(((center.y - mouse.y) / center.y) * 45, -45, 45)
        );
        let degreeY = MathUtils.degToRad(
          MathUtils.clamp((-(center.x - mouse.x) / center.x) * 45, -45, 45)
        );

        avatar.rotation.set(degreeX, degreeY, 0);
      } else {
        avatar.rotation.x = 0;
        avatar.rotation.z = 0;
        avatar.rotation.y += 0.01;
      }
    };

    scene.add(...avatarScene);

    loop.updatables.push(avatar);

    const resizer = new Resizer(this.canvas, camera, renderer);
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export default World;
