import request from "supertest";
import { app } from "../index";

describe("wordController", () => {
  it("should return sorted word for valid input", async () => {
    const response = await request(app).post("/splitnsort/api/word").send({ data: "hello" });

    expect(response.status).toBe(200);
    expect(response.body.word).toBe("ehllo");
  });

  it("should return 400 if data is missing", async () => {
    const response = await request(app).post("/splitnsort/api/word").send({});

    expect(response.status).toBe(400);
    expect(response.body.error.message).toBe("Data is required");
  });

  it("should return 422 if data is too long", async () => {
    const longString = "a".repeat(100);
    const response = await request(app).post("/splitnsort/api/word").send({ data: longString });

    expect(response.status).toBe(422);
    expect(response.body.error.message).toBe("Data must not be longer than 52 characters");
  });

  it("should return 422 if data contains non-alphabetic characters", async () => {
    const response = await request(app).post("/splitnsort/api/word").send({ data: "Nelson123" });

    expect(response.status).toBe(422);
    expect(response.body.error.message).toBe("Data must be a single word without non-alphabetic characters.");
  });
});

describe("statusController", () => {
  it("should return status info with 200", async () => {
    const response = await request(app).get("/splitnsort/api/status");

    expect(response.status).toBe(200);
    expect(typeof response.body.uptime).toBe("number");
    expect(typeof response.body.timestamp).toBe("string");
    expect(response.body.message).toBe("system online");
  });
});
