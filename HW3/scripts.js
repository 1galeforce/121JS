const grades = "jim|25, sue|32, mary|34, ann|22, ted|28, frank|15, lisa|19, mike|30, ahn|26, vishaya|27";

// Split the string into an array of students
const students = grades.split(', ');

// Sort students alphabetically by name
students.sort((a, b) => {
    const [nameA] = a.split('|');
    const [nameB] = b.split('|');
    return nameA.localeCompare(nameB);
});

// Initialize variables to store total, lowest, and highest scores
let totalScore = 0;
let lowestScore = Number.MAX_VALUE;
let highestScore = Number.MIN_VALUE;

// Get the student-list and summary elements
const studentListElement = document.getElementById('student-list');
const summaryElement = document.getElementById('summary');

// Loop through each student and process their data
students.forEach(student => {
    const [name, scoreStr] = student.split('|'); // Split the name and score
    const score = parseInt(scoreStr); // Convert score to an integer
    
    // Capitalize the first letter of the student's name
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

    // Create a table row for each student and append it to the student-list element
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `<td>${capitalizedName}</td><td>${score}</td>`;
    studentListElement.appendChild(tableRow);

    // Update total, lowest, and highest scores
    totalScore += score;
    if (score < lowestScore) lowestScore = score;
    if (score > highestScore) highestScore = score;
});

// Calculate the average score
const averageScore = totalScore / students.length;

// Display the summary
summaryElement.innerHTML = `
    Total number of students: ${students.length}<br>
    Lowest score: ${lowestScore}<br>
    Highest score: ${highestScore}<br>
    Average score: ${averageScore.toFixed(2)}
`;
