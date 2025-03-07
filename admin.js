function validateForm() {
    let isValid = true;

    document.getElementById('nameError').innerText = "";
    document.getElementById('rollNoError').innerText = "";
    document.getElementById('emailError').innerText = "";

    const name = document.getElementById('name').value;
    if (name.trim() === "") {
        document.getElementById('nameError').innerText = "Name is required";
        isValid = false;
    }

    const rollNo = document.getElementById('rollNo').value;
    if (!/^\d+$/.test(rollNo)) {
        document.getElementById('rollNoError').innerText = "Roll no must be a number.";
        isValid = false;
    }

    const email = document.getElementById('email').value;
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        document.getElementById('emailError').innerText = "Please enter a valid email.";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
}

document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

