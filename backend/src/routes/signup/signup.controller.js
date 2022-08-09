const User = require("../../../db/models/user");
const bcrypt = require("bcrypt");

async function signUp(req, res) {
  // Registrar un usuario

  const { username } = req.body;
  const password = await bcrypt.hash(req.body.password, 10);

  try {
    const findUser = await User.findOne({ where: { username: username } });

    if (findUser) {
      res.status(400).json({ message: "El usuario ya existe" });
    } else {
      const user = await User.create({
        username,
        password,
      });

      res.send(user);
    }
  } catch (error) {
    res.status(500).send();
  }
}

module.exports = signUp;
