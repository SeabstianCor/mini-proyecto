const User = require("../../../db/models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const { SECRET_KEY } = process.env;

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
        SECRET_KEY,
        { expiresIn: "8h" },
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
  res.json({
    authorization: true,
    message: "Jwt token is not expired",
  });
}

module.exports = { signIn, verifyToken };
