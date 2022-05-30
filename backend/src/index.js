const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes/index");

app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
