const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/gyroDB").then(() => {
    console.log("connection successfully");
}).catch((e) => {
    console.log(" No connection ");
});
