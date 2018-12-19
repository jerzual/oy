import * as schemapack from "schemapack";

export type SchemaValue = "uint8" | "int16" | "boolean" | "varuint";

export interface Schema {
  timestamp?: number;
  payload: {
    [key: string]: SchemaValue;
  };
}

const instance: Schema = {
  timestamp: Date.now(),
  payload: { id: "uint8",px: "uint8", py: "uint8", vx:"uint8",vy: "uint8" },
};

export default schemapack.build(instance) as Schema;
