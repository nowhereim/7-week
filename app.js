const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

const port = process.env.EXPRESS_PORT;

const corsoption = {
  origin: true,
  credentials: true,
};
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsoption));
app.use("/", routes);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(port, () => {
  console.log("서버 온 앙~");
});
