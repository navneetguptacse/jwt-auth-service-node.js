const express = require("express");
const { getLoginUser, postLoginUser, getSignUpUser, postSignUpUser, getLogoutUser } = require("../controllers/auth.controllers");
const router = express.Router();

router.route("/login").get(getLoginUser).post(postLoginUser);

router.route("/register").get(getSignUpUser).post(postSignUpUser);

router.route("/logout").get(getLogoutUser);

module.exports = router;