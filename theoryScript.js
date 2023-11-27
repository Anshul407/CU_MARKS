function calculateMarks() {
    // Get input values
    const surpriseTestMarks = parseFloat(document.getElementById('surpriseTestMarks').value) || 0;
    const assignmentMarks = parseFloat(document.getElementById('assignmentMarks').value) || 0;
    const quizMarks = parseFloat(document.getElementById('quizMarks').value) || 0;
    const mstsMarks = parseFloat(document.getElementById('mstsMarks').value) || 0;
    const finalTheoryMarks = parseFloat(document.getElementById('finalTheoryMarks').value) || 0;
    const attendanceCheckbox = document.getElementById('attendanceCheckbox').checked;

    // Calculate total marks using the provided formula for theory
    let totalMarks = (
        (surpriseTestMarks / 3) +
        (assignmentMarks ) +
        (quizMarks ) +
        (mstsMarks / 2) +
        (finalTheoryMarks)
    ).toFixed(2);

    // Add 1 mark for attendance if the checkbox is checked
    if (attendanceCheckbox) {
        totalMarks = (parseFloat(totalMarks) + 2).toFixed(2);
    }

    // Display the total marks
    document.getElementById('totalMarks').textContent = totalMarks;
}
