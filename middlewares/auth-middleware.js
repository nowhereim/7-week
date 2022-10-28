const jwt = require("jsonwebtoken");
const { Members } = require("../models");
require('dotenv').config();

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  const [authType, authToken] = (authorization || "").split(" ");
  console.log(process.env.SECRET_KEY);
  console.log(authType);
  console.log(authToken);
  console.log(jwt.verify(authToken, process.env.SECRET_KEY));
  if (!authToken || authType !== "Bearer") {
    res.status(401).send({ errorMessage: "로그인 후 이용 가능한 기능입니다." });
    return;
  }

  try {
    const { userId } = jwt.verify(authToken, process.env.SECRET_KEY);
    Members.findByPk(userId).then((user) => {
      res.locals.user = user;
      console.log(user.id);
      next();
    });
  } catch (err) {
    res.status(401).send({ errorMessage: "로그인이 필요합니다." });
  }
};
