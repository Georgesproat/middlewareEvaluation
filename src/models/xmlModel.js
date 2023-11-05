const axios = require("axios");
const xml2js = require("xml2js");

/**
 * Fetches XML data from the XML API, transforms it, and returns a JSON response.
 * @param {number} companyId - The ID of the company to retrieve.
 * @returns {Promise<Object>} - A JSON response matching the OpenAPI specification.
 */
async function fetchAndTransformData(companyId) {
  try {
    // Make a request to the XML API
    const xmlResponse = await axios.get(
      `https://raw.githubusercontent.com/MiddlewareNewZealand/evaluation-instructions/main/xml-api/${companyId}.xml`
    );

    // Handle HTTP status codes
    if (xmlResponse.status === 404) {
      return null; // Return null to indicate that the company was not found
    }

    // Convert XML to JSON
    const xmlData = xmlResponse.data;
    const jsonData = await xml2js.parseStringPromise(xmlData);

    // Implement transformation to match OpenAPI specification
    const transformedData = {
      id: companyId, // Use the provided company ID
      name: jsonData.Data.name[0], // Update to include [0]
      description: jsonData.Data.description[0] // Update to include [0]
    };

    // Return the transformed data
    return transformedData;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  fetchAndTransformData
};
