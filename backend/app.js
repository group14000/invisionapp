const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const projectRouter = require("./router/projectRouter");
require("dotenv").config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api", projectRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
