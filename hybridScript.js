function calculateMarks() {
    // Get input values
    const experimentMarks = parseFloat(document.getElementById('experimentMarks').value) || 0;
    const surpriseTestMarks = parseFloat(document.getElementById('surpriseTestMarks').value) || 0;
    const assignmentMarks = parseFloat(document.getElementById('assignmentMarks').value) || 0;
    const quizMarks = parseFloat(document.getElementById('quizMarks').value) || 0;
    const mstsMarks = parseFloat(document.getElementById('mstsMarks').value) || 0;
    const mstPracticalMarks = parseFloat(document.getElementById('mstPracticalMarks').value) || 0;
    const finalPracticalMarks = parseFloat(document.getElementById('finalPracticalMarks').value) || 0;
    const finalTheoryMarks = parseFloat(document.getElementById('finalTheoryMarks').value) || 0;
    const attendanceCheckbox = document.getElementById('attendanceCheckbox').checked;

    // Calculate total marks using the provided formula
    let totalMarks = (
        (experimentMarks / 300 * 22.5) +
        (surpriseTestMarks / 6) +
        (assignmentMarks / 2) +
        (quizMarks / 2) +
        (mstsMarks / 4) +
        (mstPracticalMarks * 0.75) +
        (finalPracticalMarks / 2) +
        (finalTheoryMarks / 2)
    ).toFixed(2);

    // Add 1 mark for attendance if the checkbox is checked
    if (attendanceCheckbox) {
        totalMarks = (parseFloat(totalMarks) + 1).toFixed(2);
    }

    // Display the total marks
    document.getElementById('totalMarks').textContent = totalMarks;
}
