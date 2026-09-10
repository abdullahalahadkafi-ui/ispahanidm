const mongoose = require('mongoose');

const ResultSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  examType: { type: String, enum: ['weekly', 'monthly', 'half_yearly', 'annual'], required: true },
  session: { type: String, required: true }, // e.g. "2025-2026"
  subjects: [{
    name: String, // Quran, Hadith, Math, etc.
    mcq: { type: Number, default: 0 },
    cq: { type: Number, default: 0 },
    total: { type: Number, default: 0 }
  }],
  grandTotal: Number,
  grade: String,
  classPosition: Number
});

module.exports = mongoose.model('Result', ResultSchema);