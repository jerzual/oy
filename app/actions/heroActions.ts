import { Point } from "pixi.js";
import { Subject, merge } from "rxjs";

export interface JumpPayload {
  direction: Point;
}

export const jumpAction = new Subject<JumpPayload>();
export const moveAction = new Subject<JumpPayload>();
export const stopAction = new Subject<JumpPayload>();

export default merge(jumpAction, moveAction, stopAction);
