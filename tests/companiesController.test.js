// tests/companiesController.test.js
const request = require("supertest");
const express = require("express");
const app = express();

const companiesRoute = require("../src/routes/companies");

app.use("/companies", companiesRoute);

describe("GET /companies/:id", () => {
  // Common setup
  beforeAll(() => {});

  it("responds with JSON", async () => {
    const response = await request(app).get("/companies/1");
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
  });

  it("responds with a company object", async () => {
    const response = await request(app).get("/companies/1");
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("description");
  });

 it("handles non-existent company IDs with a 404", async () => {
   const response = await request(app).get("/companies/3");
   expect(response.status).toBe(404);
 });

  it("responds with a company object matching the expected structure", async () => {
    const response = await request(app).get("/companies/1");
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("description");

    // Add more specific expectations for the structure
    expect(response.body.id).toBe("1");
    expect(response.body.name).toBe("MWNZ");
    expect(response.body.description).toBe("..is awesome");
  });

  // Common teardown or cleanup
  afterAll(() => {
    
  });
});
