function calculateGrade(marks) {
  if (marks >= 80) return 'A+';
  if (marks >= 70) return 'A';
  if (marks >= 60) return 'A-';
  if (marks >= 50) return 'B';
  if (marks >= 40) return 'C';
  if (marks >= 33) return 'D';
  return 'F';
}

// Example API Logic to save result
app.post('/api/results/add', async (req, res) => {
  const { studentId, examType, session, subjects } = req.body;
  
  let grandTotal = 0;
  const processedSubjects = subjects.map(sub => {
    const total = Number(sub.mcq) + Number(sub.cq);
    grandTotal += total;
    return { ...sub, total };
  });

  const avgMarks = grandTotal / subjects.length;
  const grade = calculateGrade(avgMarks);

  const newResult = new Result({
    studentId,
    examType,
    session,
    subjects: processedSubjects,
    grandTotal,
    grade
  });

  await newResult.save();
  res.json({ message: "Result saved successfully", newResult });
});