const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  studentId: { type: String, required: true, unique: true }, // 6-digit random code
  name: { type: String, required: true },
  class: { type: String, required: true },
  roll: { type: String, required: true },
  dob: Date,
  fatherName: String,
  motherName: String,
  image: String,
  branch: String,
  group: { type: String, enum: ['Science', 'Commerce', 'Arts/General'], default: 'Arts/General' }
});

module.exports = mongoose.model('Student', StudentSchema);