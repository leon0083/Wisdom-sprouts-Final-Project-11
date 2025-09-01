
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");

  let valid = true;

  if (email.value.trim() === "") {
    emailError.textContent = "Email is required";
    emailError.style.display = "block";
    valid = false;
  } else {
    emailError.style.display = "none";
  }

  if (password.value.trim() === "") {
    passwordError.textContent = "Password is required";
    passwordError.style.display = "block";
    valid = false;
  } else {
    passwordError.style.display = "none";
  }

  if (valid) {
    alert("Login successful (dummy validation)");
    // You can redirect or connect with backend API here
  }
});
