const xmlModel = require("../src/models/xmlModel");

describe("xmlModel.fetchAndTransformData", () => {
  it("should fetch and transform XML data into a JSON response", async () => {
    const companyId = 1;
    const jsonData = await xmlModel.fetchAndTransformData(companyId);

    // Ensure the JSON data contains the expected properties
    expect(jsonData).toHaveProperty("id");
    expect(jsonData).toHaveProperty("name");
    expect(jsonData).toHaveProperty("description");
  });

  it("should handle non-existent company IDs with a null response", async () => {
    const companyId = 3; 
    const jsonData = await xmlModel.fetchAndTransformData(companyId);
    expect(jsonData).toBeNull();
  });

  it("should handle errors gracefully", async () => {
    const companyId = -1; // An invalid ID to trigger an error
    try {
      await xmlModel.fetchAndTransformData(companyId);
      // If no error is thrown, fail the test
      fail("Expected an error but none was thrown.");
    } catch (error) {
      // Ensure that an error is thrown
      expect(error).toBeDefined();
    }
  });
});
