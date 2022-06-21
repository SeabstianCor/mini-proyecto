const User = require("../../../db/models/user");
const bcrypt = require("bcrypt");

async function signIn(req, res) {
  //Inicio de sesion
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username: username } });

    if (user == null) {
      return res.status(400).send("No se encontro el usuario");
    }
    if (await bcrypt.compare(password, user.password)) {
      res.send("Se inicio sesion correctamente");
    } else {
      res.send("No se pudo iniciar sesion");
    }
  } catch {
    res.status(500).send();
  }
}

module.exports = signIn;
