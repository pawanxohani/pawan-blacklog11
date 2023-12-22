const mongoose = require("mongoose");
const EditDriver = new mongoose.Schema({
    firstName: {
        type: String,
        lovercase: true,
        required: true
    },
    lastName: {
        type: String,
        lovercase: true,
    },
    email: {
        type: String,
    },
    mobile: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    joiningDate: {
        type: String,
        required: true
    },
    education: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }


}, { timestamps: true });
const DriverModel = new mongoose.model("Driver", EditDriver);
module.exports = DriverModel;