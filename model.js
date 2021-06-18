
const mongoose = require("mongoose");


const carsSchema = new mongoose.Schema({
    title: String,
    year: Number,
    make: String,
    model: String,
    levelTwoConnector: String,
    levelTwoMaxCharge: Number,
    levelThreeConnector: String,
    levelThreeMaxCharge: Number,
    batterySize: Number,
    range: Number,
});

module.exports = mongoose.model('cars', carsSchema);