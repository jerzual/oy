import { Body } from "matter-js";
import { Sprite } from "pixi.js";

/**
 * an entity is an aggregation fo two game concepts:
 * something that can be placed in a level
 * something that as a texture and a physics body
 *
 */
export class Entity {
  private sprite!: Sprite;
  private body!: Body;
  private textureName: string;

  constructor() {
    this.textureName = "default";
  }
  initObjects() {
    this.sprite = new Sprite();
    this.body = new Body();
  }
}

