const express = require("express");
const { getLoginUser, postLoginUser, getSignUpUser, postSignUpUser } = require("../controllers/auth.controllers");
const router = express.Router();

router.route("/login").get(getLoginUser).post(postLoginUser);

router.route("/register").get(getSignUpUser).post(postSignUpUser);

module.exports = router;