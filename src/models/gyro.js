const mongoose = require('mongoose');

const gyroSchema = new mongoose.Schema({
    acceloX: {
        type: String,
        required: true
    },
    acceloY: {
        type: String,
        required: true
    },
    acceloZ: {
        type: String,
        required: true
    },
    gyroX: {
        type: String,
        required: true
    },
    gyroY: {
        type: String,
        required: true
    },
    gyroZ: {
        type: String,
        required: true
    },
    temperature: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    latitude: {
        type: String,
        required: true
    },
    speed: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})

const gyro = new mongoose.model("Gyro", gyroSchema)

module.exports = gyro;
