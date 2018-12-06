import { Point } from "pixi.js";
import { Subject } from "rxjs";

export interface AvatarPayload {
  direction: Point;
}

export const createAction = new Subject<AvatarPayload>();
