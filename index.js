require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./routes/codeReview");

const app = express();
const port = process.env.PORT;
const allowedOrigins = [process.env.ALLOWED_ORIGIN, "http://localhost:5173"];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true); // Allow request
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

app.get("/test", (req, res) => {
  try {
    res.status(200).send("Api is working fine..");
  } catch (error) {
    console.error("Error in /test route:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.use(router);

app.listen(port, () => console.log(`Server is running on port ${port}`));
