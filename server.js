const express = require("express");
const app = express();
const port = 3000; 

const companiesRoute = require("./src/routes/companies");

app.use("/companies", companiesRoute);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
