import { Schema } from "./Schema";
import { Serializer, AbstractSerializer } from "./MessageSerializer";

@Schema({ key: "string", idx: "uint8" })
class SerializableTestObject extends AbstractSerializer<SerializableTestObject>
  implements Serializer<any> {
  public key: string;
  public idx: number;
  constructor(clone: Partial<SerializableTestObject>) {
    super();
    Object.assign(this, clone);
  }
}

describe("Schema decorator", () => {
  let testObject;
  beforeEach(() => {
    testObject = new SerializableTestObject({ key: "text", idx: 42 });
  });
  describe("should add encodeSchema() function", () => {
    it("is defined", () => {
      expect(testObject.encodeSchema).toBeDefined();
    });
    it("should transform object to buffer", () => {
      testObject.key = "text";

      const result: Buffer = testObject.encodeSchema(testObject);
      expect(result).toBeDefined();
      expect(Buffer.isBuffer(result)).toBe(true);
      console.log(`result: ${result}`);
    });
  });
  describe("should add decodeSchema() function", () => {
    it("is defined", () => {
      expect(testObject.decodeSchema).toBeDefined();
    });
    it("should transform buffer to Object", () => {
      const input: Buffer = testObject.encodeSchema(testObject);
      expect(input).toBeDefined();
      console.log(`input: ${input}`);
      // execute
      const result: any = testObject.decodeSchema(input);
      expect(result).toBeDefined();
      expect(result.key).toBe("text");
      expect(result.idx).toBe(42);

      console.log(`result: ${result}`);
    });
  });
});
