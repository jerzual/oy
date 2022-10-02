import { Vector } from "./Vector";

export interface Movable {
	position: Vector;
	direction: Vector;
	velocity: Vector;
}
