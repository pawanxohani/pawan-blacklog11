const mongoose = require('mongoose');

const gyroSchema = new mongoose.Schema({
    acceloX: {
        type: String,
    },
    acceloY: {
        type: String,
    },
    acceloZ: {
        type: String,
    },
    gyroX: {
        type: String,
    },
    gyroY: {
        type: String,
    },
    gyroZ: {
        type: String,
    },
    temperature: {
        type: String,
    },
    longitude: {
        type: String,
    },
    latitude: {
        type: String,
    },
    speed: {
        type: String,
    },
    time: {
        type: String,
    },
    date: {
        type: String,
    }
})

const gyro = new mongoose.model("Gyro", gyroSchema)

module.exports = gyro;
