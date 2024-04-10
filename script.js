function validateForm() {
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var nameError = document.getElementById("nameError");
    var usernameError = document.getElementById("usernameError");

    if (name === "") {
        nameError.style.display = "block";
    } else {
        nameError.style.display = "none";
    }

    if (username === "") {
        usernameError.style.display = "block";
    } else {
        usernameError.style.display = "none";
    }

    if (name === "" || username === "" || email === "" || password === "") {
        alert("Please enter all fields: Name, Username, Email, and Password.");
        return false;
    }
}


const checkboxes = document.querySelectorAll('.check-box');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const isChecked = this.checked;
        const parent = this.closest('.content1');

        if (isChecked) {
            parent.style.border = '2px solid red';
            parent.querySelector('h4').innerText += ' - Checked';
        } else {
            parent.style.border = 'none';
            parent.querySelector('h4').innerText = parent.querySelector('h4').innerText.replace(' - Checked', '');
        }
    });
});