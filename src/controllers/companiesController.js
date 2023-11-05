const xmlModel = require("../models/xmlModel");

async function getCompany(req, res) {
  const companyId = req.params.id;

  try {
    const jsonResponse = await xmlModel.fetchAndTransformData(companyId);
    if (jsonResponse) {
      res.status(200).json(jsonResponse);
    } else {
      res.status(404).json({ error: "404 Company not found" }); 
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "500 Internal Server Error" });
  }
}

module.exports = {
  getCompany
};
