const express = require("express");
const app = express();
require("./db/connection");
const taskRoutes = require("./routes/TaskRoutes");
const cors = require("cors");

const port = process.env.PORT || 8080;

// Setup CORS
const allowedOrigins = [
  "http://localhost:3000",
  //   "https://your-frontend-name.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// app.use(cors());
app.use(express.json());
// app.options("*", cors());
app.use("/task", taskRoutes);

app.listen(port, () => {
  console.log("listening to the port", port);
});
