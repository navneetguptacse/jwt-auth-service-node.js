const User = require("../models/user.model");

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
        /* this -refers to the user being created and password being hashed */
        /* doc -refers to the user that was created and saved to db */
        res.status(201).json(user);
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }

}

module.exports = { getLoginUser, postLoginUser, getSignUpUser, postSignUpUser };