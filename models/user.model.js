const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please enter an email"],
        unique: true,
        lowercase: true,
        validate: [isEmail, "Please enter a valid email"],
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minlength: [6, "Minimum password length should be 6 characters"],
    },
});

/* before doc saved to db (pre hook) - hash password before saving */
userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    console.log("user about to be created & saved", this); // this refers to the user being created and password being hashed and saved into database
    next();
});

const User = mongoose.model("user", userSchema);

module.exports = User;