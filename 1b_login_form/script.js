const form = document.querySelector("form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const staticUsername = "pranavkale";
const staticPassword = "Pass1234!";
function validateUsername(username) {
    if (username.length !== 10) {
        return false;
    }
    for (let i = 0; i < username.length; i++) {
        const char = username[i];
        if (!(char >= 'A' && char <= 'Z') && !(char >= 'a' && char <= 'z')) {
            return false;
        }
    }
    return true;
}
function validatePassword(password) {
    if (password.length < 8) {
        return false;
    }
    let hasUppercase = false;
    let hasNumber = false;
    let hasSpecialChar = false;
    for (let i = 0; i < password.length; i++) {
        const char = password[i];
        if (char >= 'A' && char <= 'Z') {
            hasUppercase = true;
        }
        if (char >= '0' && char <= '9') {
            hasNumber = true;
        }
        if (
            (char === '!' || char === '@' || char === '#' || char === '$' || char === '%' || char === '^' ||
            char === '&' || char === '*' || char === '(' || char === ')')
        ) {
            hasSpecialChar = true;
        }
    }
    return hasUppercase && hasNumber && hasSpecialChar;
}
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    if (!validateUsername(username)) {
        alert("Username must be exactly 10 alphabetic characters.");
        return;
    }
    if (!validatePassword(password)) {
        alert("Password must be at least 8 characters long and contain at least one uppercase letter, one digit, and one special character.");
        return;
    }
    if (username !== staticUsername || password !== staticPassword) {
        alert("Incorrect username or password.");
        return;
    }
    form.submit();
});