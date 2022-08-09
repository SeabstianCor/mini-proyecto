const jwt = require("jsonwebtoken");
const User = require("../../db/models/user");

async function obtainToken(req, res) {
  try {
    const bearerHeader = req.headers["authorization"];

    if (bearerHeader !== "undefined") {
      const bearerToken = bearerHeader.split(" ")[1];
      const auth = jwt.verify(bearerToken, "secretkey");
      return auth;
    }
  } catch (error) {
    console.log(error);
  }
}

async function authorization(req, res, next) {
  try {
    const token = obtainToken(req);
    const auth = await token;
    if (auth.userId) {
      req.user = auth;
      next();
    }
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Sin autorizacion" });
  }
  console.log("entre aqui");
}

async function privilege(req, res, next) {
  try {
    const token = obtainToken(req);
    const auth = await token;
    console.log(auth);

    // -> datos user
    const user = await User.findByPk(auth.userId);
    console.log(user.role);

    if (user.role === "admin") {
      req.user = auth;
      next();
    } else {
      res
        .status(401)
        .json({ message: "No tienes los permisos de administrador" });
    }
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Sin autorizacion" });
  }
}

module.exports = { authorization, privilege };
