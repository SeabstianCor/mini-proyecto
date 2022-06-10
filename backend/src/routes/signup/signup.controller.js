const User = require("../../../db/models/user");

async function signUp(req, res) {
  // Registrar un usuario

  const { username, password, role } = req.body;

  try {
    const user = await User.create({
      username,
      password,
      role,
    });

    res.send(user);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
}

module.exports = signUp;
