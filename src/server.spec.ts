import supertest from "supertest";
import { server } from "./server";
import { describe, beforeAll, afterAll, test, expect } from "vitest";

describe.skip("express server", () => {
  let response: supertest.Response;
  // beforeAll(async () => {
  //   response = await supertest(server).get("/");
  // });
  // afterAll(() => {
  //   server.close();
  // });
  describe("should respond to request '/'", () => {
    test.skip("with a 200 status", () => {
      expect(response).toBeDefined();
      expect(response.status).toBe(200);
    });
  });
});
