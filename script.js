document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username === "JANARY" && password === "12345") {
      window.location.href = "dashboard.html";
    } else {
      document.getElementById("error").textContent = "Usuario o contraseña incorrectos";
    }
  });
  