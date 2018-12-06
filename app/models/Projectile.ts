import { Movable } from "../interfaces/Movable";
import { Vector } from "../interfaces/Vector";

export default class Projectile implements Movable {
  position: Vector;
  direction: Vector;
  velocity: Vector;
}
