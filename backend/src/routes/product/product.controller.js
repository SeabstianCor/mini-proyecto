const jwt = require("jsonwebtoken");

async function product(req, res) {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: "producto creado",
        authData,
      });
    }
  });
}

// Authorization: Bearer <token>
async function authorization(req, res, next) {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
  console.log("entre aqui");
  next();
}

module.exports = { product, authorization };
