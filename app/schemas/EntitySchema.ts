import * as schemapack from "schemapack";
export interface VectorSchema {

}
export interface EntitySchema {
  l: {}
  p: { x: string; y: string };
  v: { x: string; y: string };
}

var heroSchema = schemapack.build({
  health: "varuint",
  jumping: "boolean",
  position: ["int16"],
  attributes: { str: "uint8", agi: "uint8", int: "uint8" },
});

// On the client:
var player = {
  health: 4000,
  jumping: false,
  position: [-540, 343, 1201],
  attributes: { str: 87, agi: 42, int: 22 },
};

var buffer = heroSchema.encode(player);
