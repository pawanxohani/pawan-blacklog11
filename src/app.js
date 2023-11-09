const express = require("express");
require('dotenv').config({path : ".env"});
require("../src/db/connection");
const router = require("./router/router");
var cors = require('cors')

const hostname = process.env.HOSTNAME;
const port = process.env.PORT || 3000;
const app = express();

app.use(cors({origin : '*'}))
app.use(express.json());
app.use("/api/v1/", router);

app.listen(port, () => {
    console.log(`connection is live at host and port :${hostname}:${port}`);
})
