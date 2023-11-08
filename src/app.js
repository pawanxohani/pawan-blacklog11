require('dotenv').config()
const express = require("express");
require("../src/db/connection");
const router = require("./router/router");
const app = express();
const port = process.env.PORT || 8000;


app.use(express.json());
app.use("/api/v1/", router);

app.listen(port, () => {
    console.log(`connection is live at port ${port}`);
  
});
