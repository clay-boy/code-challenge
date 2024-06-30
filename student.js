// Declaration
function getGrade() {
    let marks;

    // while to repeatedly propmt the user for a valid number
    while (true) {
        marks = prompt("Enter marks (0-100):");
        marks = parseInt(marks);

        if (isNaN(marks)) {
            alert("Invalid input. Please enter a number.");
        } else if (marks < 0 || marks > 100) {
            alert("Invalid value. Please enter a number between 0 and 100.");
        } else {
            break;
        }
    }

    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
        grade = 'B';
    } else if (marks >= 49 && marks <= 59) {
        grade = 'C';
    } else if (marks >= 40 && marks <= 48) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    // Display the calculated grade
    alert('Grade: ${grade}');
}

getGrade();

