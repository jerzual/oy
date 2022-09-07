import { Body } from "matter-js";
import { Sprite } from "pixi.js";

/**
 * an entitiy is an aggregation fo two game sconcepts:
 * something that can be placed ina level
 * something that as a texture and a physics body
 *
 */
export class Entity {
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

