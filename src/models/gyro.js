const mongoose = require("mongoose");

const gyroSchema = new mongoose.Schema({
  GPSfix: {
    type: String,
  },
  Date: {
    type: String,
  },
  Time: {
    type: String,
  },
  Latitude: {
    type: String,
  },
  Latitude_Direction: {
    type: String,
  },
  Longitude: {
    type: String,
  },
  Longitude_Direction: {
    type: String,
  },
  Speed: {
    type: String,
  },
  Heading: {
    type: String,
  },
  No_of_satellites: {
    type: String,
  },
  Altitude: {
    type: String,
  },
  PDOP: {
    type: String,
  },
  HDOP: {
    type: String,
  },
  Network_operator_name: {
    type: String,
  },
  Ignition: {
    type: String,
  },
  Main_power_status: {
    type: String,
  },
  Main_input_voltage: {
    type: String,
  },
  Emergency_status: {
    type: String,
  },
  GSM_signal_strength: {
    type: String,
  },
  MCC: {
    type: String,
  },
  MNC: {
    type: String,
  },
  LAC: {
    type: String,
  },
  Cell_id: {
    type: String,
  },
  NMR: {
    type: String,
  },
  Digital_input_status: {
    type: String,
  },
  Digital_output_status: {
    type: String,
  },
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
});

const gyro = new mongoose.model("Gyro", gyroSchema);

module.exports = gyro;
