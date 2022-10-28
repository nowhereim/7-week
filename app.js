const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");
const corsOption = {
  origin: true,
  credentials: true,
};
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOption));
app.use("/", routes);


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
