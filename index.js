const express = require("express");
const app = express();
require("./db/connection");
const taskRoutes = require("./routes/TaskRoutes");
const cors = require("cors");

const port = process.env.PORT || 8080;
// const allowedOrigins = [
//   "http://localhost:3000",
//   "http://localhost:3001",
//   "http://localhost:3003",
//   //   'https://central-lending-frontend.vercel.app',
// ];
// app.set("trust proxy", 1);
// app.use(
//   cors({
//     origin: (origin, callback) => {
//       if (!origin) return callback(null, true);
//       if (allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true,
//   })
// );

app.use(cors());
app.use(express.json());
app.use("/task", taskRoutes);

app.listen(port, () => {
  console.log("listening to the port", port);
});
