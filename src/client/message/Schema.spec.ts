import { Schema, Pack } from "./Schema";
import { Serializer } from "./MessageSerializer";

@Schema({ key: "string", idx: "uint8" })
class SerializableTestObject implements Serializer {
  @Pack("uint8")
  public agi: number;
  constructor(public key: string, public idx: number) {}
}

describe("Schema decorator", () => {
  let testObject;
  beforeEach(() => {
    testObject = new SerializableTestObject("text", 42);
  });
  describe("encode()", () => {
    it("is defined", () => {
      expect(testObject.converter.encode).toBeDefined();
    });
    it("should transform object to buffer", () => {
      testObject.key = "text";

      const result: Buffer = testObject.converter.encode(testObject);
      expect(result).toBeDefined();
      expect(Buffer.isBuffer(result)).toBe(true);
      console.log(`result: ${result}`);
    });
  });
  describe("decode()", () => {
    it("is defined", () => {
      expect(testObject.converter.decode).toBeDefined();
    });
    it("should transform buffer to Object", () => {
      const input: Buffer = testObject.converter.encode(testObject);
        expect(input).toBeDefined();
        console.log(`input: ${input}`);
      // execute
      const result: SerializableTestObject = testObject.converter.decode(input);
      expect(result).toBeDefined();
      expect(result.key).toBe("text");
      expect(result.idx).toBe(42);

      console.log(`result: ${result}`);
    });
  });
});
