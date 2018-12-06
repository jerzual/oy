import * as schemapack from "schemapack";

export type SchemaValue = "unit8" | "int16" | "boolean" | "varuint";

export interface Schema {
  timestamp?: number;
  payload: {
    [key: string]: SchemaValue;
  };
}

const instance: Schema = {
  timestamp: Date.now(),
  payload: { "452-025-1": "unit8" },
};

export function createSchema(schema: Schema): any {
  return schemapack.build({
    timestamp: Date.now(),
    ...schema,
  });
}
