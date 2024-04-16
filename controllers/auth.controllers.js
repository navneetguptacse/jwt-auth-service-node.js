const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: "", password: "" };

    /* validation errors */
    if (err.message.includes("user validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    /* duplicate error code */
    if (err.code === 11000) {
        errors.email = "Email is already registered";
        return errors;
    }

    /* incorrect email */
    if (err.message === "incorrect email") {
        errors.email = "Email is not registered";
    }

    /* incorrect password */
    if (err.message === "incorrect password") {
        errors.password = "Password is incorrect";
    }
    return errors;
}

/* create token */
const maxAge = 2 * 24 * 60 * 60;
const createJwtToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: maxAge });
}

/* controller actions */
const getLoginUser = (req, res) => {
    res.render("login");
}

const postLoginUser = (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    res.send("user logged in");
}

const getSignUpUser = (req, res) => {
    res.render("register");
}

const postSignUpUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.create({ email, password });
        /* this -refers to the user being created and password being hashed and saved into database */
        const token = createJwtToken(user._id);
        res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(201).json({ user: user._id });
        console.log("User created successfully");
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}

module.exports = { getLoginUser, postLoginUser, getSignUpUser, postSignUpUser };