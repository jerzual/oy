export abstract class Serializer<T> {
  encodeSchema?: (input: T) => Buffer;
  decodeSchema?: (buffer: Buffer | object) => T;
}

export abstract class AbstractSerializer<T> implements Serializer<T> {
  encodeSchema: (input: T) => Buffer = () => {
    return new Buffer("");
  };
  decodeSchema: (buffer: Buffer | object) => T = () => {
    return {} as T;
  };

