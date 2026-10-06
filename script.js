function processData() {

    let confirmation = confirm("are you sure?");

    if (confirmation === false) {
        alert("Processing cancelled.");
        return;
    }

    let studentName = document.getElementById("studentName").value;
    let age = document.getElementById("age").value;
    let enrolled = document.getElementById("enrolled").value;

    let sentence = "Student Name is " + studentName +
                   ", Age is " + age +
                   ", Enrolled status is " + enrolled;

    alert(sentence);

    let valueA = Number(document.getElementById("valueA").value);
    let valueB = Number(document.getElementById("valueB").value);

    let divisionResult = valueA / valueB;

    let text = document.getElementById("mathText").value;

    let nanResult = text / 2;

    let largeNumber = 4.25e+6;
    let smallNumber = 4.25e-6;

    document.write("Division Result: " + divisionResult + "<br>");
    document.write("NaN Result: " + nanResult + "<br>");
    document.write("Large Number: " + largeNumber + "<br>");
    document.write("Small Number: " + smallNumber + "<br>");

    let subjects = ["Java", "Python", "Database"];

    document.write("Subjects:<br>");

    for (let subject of subjects) {
        document.write(subject + "<br>");
    }

    document.write("Student Name:<br>");

    for (let i = 0; i < valueA; i++) {
        document.write(studentName + "<br>");
    }

}