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
      jwt.sign({ userId: user.id }, "secretkey", (err, token) => {
        res.json({
          token,
        });
      });
    } else {
      res
        .status(400)
        .json({ message: "No se pudo iniciar sesion, contraseña incorrecta" });
    }
  } catch {
    res.status(500).send();
  }
}

module.exports = signIn;
