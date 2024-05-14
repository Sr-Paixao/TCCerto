const jwt = require("jsonwebtoken");
require("dotenv/config");

module.exports = function generateToken(id_usuario, email) {
  if (!(id_usuario ?? false) || !(email ?? false)) {
    return false;
  }
  const secret = process.env.JWT_PASSWORD;
  return jwt.sign({ infoUser: { id_usuario, email } }, secret, {
    expiresIn: 60 * 60 * 5,
  });
}
// export { generateToken };
