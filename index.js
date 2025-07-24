const express = require("express");
const app = express();
require("./db/connection");
const taskRoutes = require("./routes/TaskRoutes");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 8080;

const allowedOrigins = [
  "http://localhost:3000",
  "https://todo-frontend-7dxrnoc3v-a-project.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (
        allowedOrigins.includes(origin) ||
        /^https:\/\/todo-frontend.*\.vercel\.app$/.test(origin)
      ) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.set("trust proxy", 1);
// app.use(
//   cors({
//     origin: [
//       "*",
//       "https://todo-frontend-flame-one.vercel.app",
//       "https://todo-frontend-7dxrnoc3v-a-project.vercel.app",
//     ],
//   })
// );

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/task", taskRoutes);

app.get("/", (req, res) => {
  res.send("hello from backend");
});

app.listen(port, () => {
  console.log("listening to the port", port);
});
