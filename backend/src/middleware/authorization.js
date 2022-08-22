const jwt = require("jsonwebtoken");
const User = require("../../db/models/user");

async function authorization(req, res, next) {
  try {
    const bearerHeader = req.headers["authorization"];
    console.log(bearerHeader);

    if (bearerHeader !== "undefined") {
      const bearerToken = bearerHeader.split(" ")[1];
      const auth = jwt.verify(bearerToken, "secretkey");
      if (auth.userId) {
        req.user = auth;
        next();
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Sin autorizacion" });
  }
}

async function privilege(req, res, next) {
  try {
    // -> datos user
    const user = await User.findByPk(req.user.userId);
    console.log(user.role);

    if (user.role === "admin") {
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
