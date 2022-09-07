import * as schemapack from "schemapack";

/**
 * Types from "schemapack", @see https://github.com/phretaddin/schemapack
 */
export type SchemaValue = "string"| "bool" | "int8" | "uint8" | "int16" 
    | "uint16" | "int32" | "uint32" | "float32" | "float64"
    | "varuint"
    | "varint"
    | "buffer"  ;
/**
 * Parameter of the decorator gives.
 */
export type SchemaDefinition = {
    [key: string]: SchemaValue | SchemaValue[] | SchemaDefinition ;
}

/**
 * @Schema class decorator.
 * 
 * adds encode and decode functions to objects.
 */
export const Schema = (structure: SchemaDefinition): ClassDecorator => {
    console.log(`Schema(): evaluated: ${JSON.stringify(structure)}`);
    const schema = schemapack.build(structure);
    return <T extends Function>(target: T): void => {
      console.log(`Schema(): applied to ${JSON.stringify(target)}`);
      target.prototype.encode = (input: Object): Buffer => schema.encode(input);
      target.prototype.decode = (output: Buffer): Object => schema.encode(output);
    };
}