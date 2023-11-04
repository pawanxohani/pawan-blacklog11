const mongoose = require('mongoose');

const gyroSchema = new mongoose.Schema({
    acceloX: {
        type: Number,
        required: true
    },
    acceloY: {
        type: Number,
        required: true
    },
    acceloZ: {
        type: Number,
        required: true
    },
    gyroX: {
        type: Number,
        required: true
    },
    gyroY: {
        type: Number,
        required: true
    },
    gyroZ: {
        type: Number,
        required: true
    },
    temperature: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    speed: {
        type: Number,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

const gyro = new mongoose.model("Gyro", gyroSchema)

module.exports = gyro;