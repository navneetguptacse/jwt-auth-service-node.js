const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    /* check json web token exists and is it verified ? */
    if (token) {
        jwt.verify(token, process.env.SECRET_KEY, (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.redirect("/login");
            } else {
                console.log(decodedToken);
                next();
            }
        });
    } else {
        res.redirect("/login");
    }
}

/* check current user every time when user jumps a new page */
const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    /* check json web token exists and is it verified ? */
    if (token) {
        jwt.verify(token, process.env.SECRET_KEY, async (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.locals.user = null;
                next();
            } else {
                console.log(decodedToken);
                /* fetch user from database */
                let user = await User.findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        });
    } else {
        res.locals.user = null;
        next();
    }
}

module.exports = { requireAuth, checkUser };