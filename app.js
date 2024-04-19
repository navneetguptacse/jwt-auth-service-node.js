require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth.route");
const cookieParser = require("cookie-parser");
const { requireAuth, checkUser } = require('./middleware/auth.middleware');

const app = express();

/* local middleware */
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

/* view engine */
app.set("view engine", "ejs");

/* environment variables */
const DB_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;

/* database connection */
mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) =>
    app.listen(PORT, () =>
      console.log(`Server is running at: http://localhost:${PORT}`)
    )
  )
  .catch((err) => console.log(err));

/* routes */
app.get('*', checkUser);
app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", requireAuth, (req, res) => res.render("smoothies"));
app.use(authRoutes);

/* The following log-content is from  { ./middleware/auth.middleware } in line No. 13 and 33*/