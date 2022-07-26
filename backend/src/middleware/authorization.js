const jwt = require("jsonwebtoken");

async function authorization(req, res, next) {
  try {
    const bearerHeader = req.headers["authorization"];
    console.log(bearerHeader);

    if (bearerHeader !== "undefined") {
      const bearerToken = bearerHeader.split(" ")[1];
      const auth = jwt.verify(bearerToken, "secretkey");
      console.log(auth);
      if (auth.userId) {
        req.user = auth;
        next();
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Sin autorizacion" });
  }
  console.log("entre aqui");
}

module.exports = authorization;
