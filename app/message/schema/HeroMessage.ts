import { Message } from "../Message";
import { Observable, Subject, BehaviorSubject } from "rxjs";
import * as schemapack from "schemapack";

export enum HeroMessagesTypes {
  Join,
  Quit,
  Action,
}

export class HeroMessage {
  create(type: HeroMessagesTypes) {
    return schemapack.build({
      health: "varuint",
      jumping: "boolean",
      position: ["int16"],
      attributes: { str: "uint8", agi: "uint8", int: "uint8" },
    });
  }
}
