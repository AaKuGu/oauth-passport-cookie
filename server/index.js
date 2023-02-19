const dotenv = require("dotenv");
dotenv.config();
const cookieSession = require("cookie-session");
const passportSetup = require("./passport");
const passport = require("passport");
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth.js");
const PORT = process.env.PORT;

app.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_SESSION],
    maxAge: 24 * 60 * 60 * 1000,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: process.env.CLIENT_API,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is working fine ..." });
});

app.use("/auth", authRoute);

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
