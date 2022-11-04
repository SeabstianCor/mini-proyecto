const User = require("../../../db/models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function signIn(req, res) {
  //Inicio de sesion
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username: username } });
    if (user == null) {
      return res.status(400).send("No se encontro el usuario");
    }

    if (await bcrypt.compare(password, user.password)) {
      //jwt
      const role = user.role;
      jwt.sign(
        { userId: user.id },
        "secretkey",
        { expiresIn: "3d" },
        (err, token) => {
          res.json({
            token,
            username,
            role,
          });
        }
      );
    } else {
      res
        .status(400)
        .json({ message: "No se pudo iniciar sesion, contraseña incorrecta" });
    }
  } catch {
    res.status(500).send();
  }
}

async function verifyToken(req, res) {
  try {
    const bearerHeader = req.headers["authorization"];
    if (bearerHeader !== "undefined") {
      const bearerToken = bearerHeader.split(" ")[1];
      jwt.verify(bearerToken, "secretkey");
      res.json({
        tokenExpired: false,
        message: "jwt token is not expired",
      });
    }
  } catch (error) {
    res.json({
      tokenExpired: true,
      message: "jwt token expired",
    });
  }
}
module.exports = { signIn, verifyToken };
