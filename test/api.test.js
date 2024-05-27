const request = require("supertest");
const server = require("../index");
const { expect } = require("@jest/globals");

describe("Go Game Score API", () => {
  test("should return max_draws: 0 for /0/0/0", async () => {
    const response = await request(server).get("/0/0/0");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ max_draws: 0 });
  });

  test("should return max_draws: 2 for /1/1/2", async () => {
    const response = await request(server).get("/1/1/2");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ max_draws: 2 });
  });

  test("should return max_draws: 6 for /3/4/5", async () => {
    const response = await request(server).get("/3/4/5");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ max_draws: 6 });
  });

  test("should return max_draws: -1 for /3/3/3", async () => {
    const response = await request(server).get("/3/3/3");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ max_draws: -1 });
  });

  test("should return max_draws: 20 for /0/0/30", async () => {
    const response = await request(server).get("/0/0/30");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ max_draws: 20 });
  });

  test("should return max_draws: 20 for /0/10/20", async () => {
    const response = await request(server).get("/0/10/20");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ max_draws: 20 });
  });

  test("should return max_draws: 30 for /10/20/30", async () => {
    const response = await request(server).get("/10/20/30");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ max_draws: 30 });
  });
});
