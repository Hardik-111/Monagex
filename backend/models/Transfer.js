// models/Transfer.js

const mongoose = require('mongoose');

const transferSchema = new mongoose.Schema({
  currentDate: { type: Date, required: true },
  amount: { type: Number, required: true },
  paymentFrom: { type: String, required: true },
  paymentTo: { type: String, required: true },
  uploadFile: { type: String }, // You can store the file path or use a file storage service
  note: { type: String },
});

const Transfer = mongoose.model('Transfer', transferSchema);

module.exports = Transfer;
