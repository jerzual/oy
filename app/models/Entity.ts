import { Body } from "matter-js";
import { Sprite } from "pixi.js";

class Entity {
  private sprite: Sprite;
  private body: Body;
  private textureName: string;
  constructor() {
    this.textureName = "default";
  }
  initObjects() {
    this.sprite = new Sprite();
    this.body = new Body();
  }
}

export default Entity;
