const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  googleId: String,
  profilePic: String,
  role: { type: String, enum: ['student', 'teacher', 'admin'], default: 'student' },
  isApproved: { type: Boolean, default: false }, // Teachers wait for admin approval
  phone: String,
  bloodGroup: String,
  // Student Specific Profile Info
  studentClass: String,
  roll: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);