import * as schemapack from "schemapack";
import { Type } from "injection-js";

/**
 * Types from "schemapack", @see https://github.com/phretaddin/schemapack
 */
export type SchemaValue =
  | "string"
  | "bool"
  | "int8"
  | "uint8"
  | "int16"
  | "uint16"
  | "int32"
  | "uint32"
  | "float32"
  | "float64"
  | "varuint"
  | "varint"
  | "buffer";
/**
 * Parameter of the decorator gives.
 */
export type SchemaDefinition = {
  [key: string]: SchemaValue | SchemaValue[] | SchemaDefinition;
};

export const Pack = (value: SchemaValue | Type): PropertyDecorator => {
  return (
    target: object,
    propertyKey: string | symbol,
  ) => {
      target["__pack__"].propertyKey = value;
      debugger;
  };
};

export const Packer = (value: SchemaValue | Type): MethodDecorator => {
  return (
    target: object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<any>,
  ) => {
      debugger;
  };
};
/**
 * @Schema class decorator.
 *
 * adds encode and decode functions to objects.
 */
export const Schema = (structure: SchemaDefinition): ClassDecorator => {
  console.log(`Schema(): evaluated: ${JSON.stringify(structure)}`);
  const schema = schemapack.build(structure);
  return <T extends Function>(constructor: T): void => {
    console.log(`Schema(): applied to ${JSON.stringify(constructor)}`);
    const converter = new SchemaConverter(schema);
    constructor.prototype.converter = converter;
  };
};

export class SchemaConverter<SchemaDefinition> {
  constructor(private schema: any) {}
  encode(output: Object): Buffer {
    return this.schema.encode(output);
  }
  decode(input: Buffer): Object {
    return this.schema.decode(input);
  }
}
