// Function to generate unique 6-digit Student ID
async function generateUniqueID() {
  let isUnique = false;
  let randomID = '';
  
  while (!isUnique) {
    randomID = Math.floor(100000 + Math.random() * 900000).toString();
    const existingStudent = await Student.findOne({ studentId: randomID });
    if (!existingStudent) {
      isUnique = true;
    }
  }
  return randomID;
}