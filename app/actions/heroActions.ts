import { Point } from "pixi.js";
import { Subject } from "rxjs";

export interface JumpPayload {
  direction: Point;
}

export const jumpAction = new Subject<JumpPayload>();
export const moveAction = new Subject<JumpPayload>();
export const stop = new Subject<JumpPayload>();
