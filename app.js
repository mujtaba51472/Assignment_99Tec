const express = require("express");
const cors = require('cors');
const user = require("./routes/userRoute");
const cookieParser = require("cookie-parser");

const errorMiddleWare = require("./middlewares/error");

const app = express();

app.use(cors())

//  json parser
app.use(express.json());

// cookie parser
app.use(cookieParser());


// user
app.use("/api/mj", user);

app.use(errorMiddleWare);

module.exports = app;
