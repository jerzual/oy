import { Schema } from "../message/Schema";
import { Point } from "pixi.js";

@Schema({
    position: {
        x: "int16",
        y: "int16",
    },
    velocity: {
        x: "int16",
        y: "int16",
    }
})
export class PhysicsEvent {
    public position: Point;
    public velocity: Point;
}