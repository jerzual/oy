export interface Serializer<T> {
  encodeSchema?: (input: T) => Buffer;
  decodeSchema?: (buffer: Buffer | object) => T;
}
