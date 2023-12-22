const express = require("express");
const cookieParser = require('cookie-parser');
require('dotenv').config({ path: ".env" });
require("../src/db/connection");
const router = require("./router/router");
const userRouter = require('./router/userRoute');
const editRouter = require('./router/editRouter');


var cors = require('cors')

const hostname = process.env.HOSTNAME;
const port = process.env.PORT || 3000;
const app = express();

app.use(cors({ origin: '*' }))
app.use(express.json());
app.use("/api/v1/", router);
app.use("/api/v1/", userRouter);
app.use("/api/v1/", editRouter);
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());


app.listen(port, () => {
    console.log(`connection is live at host and port :${hostname}:${port}`);
})
