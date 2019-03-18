export interface Serializer {
  [key: string]: any;
  encode?: (input: Object) => Buffer;
  decode?: (buffer: Buffer) => Object;
}
