const express = require("express");
const app = express();
require("./db/connection");
const taskRoutes = require("./routes/TaskRoutes");
const cors = require("cors");

const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());
app.use("/task", taskRoutes);

app.listen(port, () => {
  console.log("listening to the port", port);
});
