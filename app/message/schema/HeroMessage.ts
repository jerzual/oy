import { Message } from "../Message";
import { Observable, Subject, BehaviorSubject } from "rxjs";
import * as schemapack from "schemapack";

export enum HeroMessagesTypes {
  Join,
  Quit,
  Action,
}
var HeroSchema = schemapack.build({
  health: "varuint",
  jumping: "boolean",
  position: ["int16"],
  attributes: { str: "uint8", agi: "uint8", int: "uint8" },
});

export class HeroMessage extends BehaviorSubject<HeroSchema>
  implements Message<HeroMessagesTypes, HeroSchema> {
  create(type: HeroMessagesTypes, schema: HeroSchema) {
    super();
  }
}
