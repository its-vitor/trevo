function register() {
  document.getElementById("register").style.display = "block";
  document.getElementById("register-banner").style.display = "flex";
  document.getElementById("login").style.display = "none";
  document.getElementById("login-banner").style.display = "none";
  document.getElementById("registerButton").classList.add("active");
  document.getElementById("loginButton").classList.remove("active");
}

function login() {
  document.getElementById("login-banner").style.display = "flex";
  document.getElementById("login").style.display = "block";
  document.getElementById("register").style.display = "none";
  document.getElementById("register-banner").style.display = "none";
  document.getElementById("loginButton").classList.add("active");
  document.getElementById("registerButton").classList.remove("active");
}

function menuBar() {
  
}