const loginBtn = document.getElementById("loginBtn");
const email = document.getElementById("email");
const password = document.getElementById("password");
const error = document.getElementById("error");
const togglePassword = document.getElementById("togglePassword");
const themeToggle = document.getElementById("themeToggle");

// Toggle password
togglePassword.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
        togglePassword.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        password.type = "password";
        togglePassword.classList.replace("fa-eye-slash", "fa-eye");
    }
});

// Dark Mode
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Validation
loginBtn.addEventListener("click", () => {
    error.textContent = "";
    error.style.color = "red";

    if (!email.value || !password.value) {
        error.textContent = "Please fill all fields";
        return;
    }

    if (!email.value.includes("@")) {
        error.textContent = "Invalid email";
        return;
    }

    if (password.value.length < 6) {
        error.textContent = "Password must be at least 6 chars";
        return;
    }

    error.style.color = "lightgreen";
    error.textContent = "Login Successful 🚀";
});