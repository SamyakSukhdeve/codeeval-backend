require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./routes/codeReview");

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(cors((origin = "https://codeeval.samyaksukhdeve.dev/")));

app.get("/test", (req, res) => {
  res.status(200).send("Api is working fine..");
});

app.use(router);

app.listen(port, () => console.log(`Server is running on port ${port}`));
