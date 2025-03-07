document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const rollNo = document.getElementById('rollNo').value;
    const email = document.getElementById('email').value;

    if (validateForm()) {
       
        const tableBody = document.querySelector('#registeredTable tbody');
        const newRow = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = name;
        newRow.appendChild(nameCell);

        const rollNoCell = document.createElement('td');
        rollNoCell.textContent = rollNo;
        newRow.appendChild(rollNoCell);

        const emailCell = document.createElement('td');
        emailCell.textContent = email;
        newRow.appendChild(emailCell);

        tableBody.appendChild(newRow);

    
        document.getElementById('studentForm').reset();
    }
});

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
        document.getElementById('rollNoError').innerText = "PRN no must be a number.";
        isValid = false;
    }

    const email = document.getElementById('email').value;
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        document.getElementById('emailError').innerText = "Please enter a valid email.";
        isValid = false;
    }

    return isValid;
}


let countdownTime = 600; 
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const minutes = Math.floor(countdownTime / 60);
    let seconds = countdownTime % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownElement.innerHTML = `${minutes}:${seconds}`;
    if (countdownTime > 0) {
        countdownTime--;
    } else {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "Time's up!";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

