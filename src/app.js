const express = require("express");
require("../src/db/connection");
const router = require("./router/router");
var cors = require('cors')

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({origin : '*'}))
app.use(express.json());
app.use("/api/v1/", router);

app.listen(port, () => {
    console.log(`connection is live at port ${port}`);
})
