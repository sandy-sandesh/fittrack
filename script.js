document.addEventListener("DOMContentLoaded", () => {
  const regForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");


  function joinNow() {
  alert("Redirecting to registration page...");
  window.location.href = "register.html"; // Make sure this file exists
}


  // Registration handler
  if (regForm) {
    regForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const username = document.getElementById("regUsername").value;
      const password = document.getElementById("regPassword").value;

      // Send registration request to backend
      const response = await fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        window.location.href = "login.html";
      } else {
        alert(data.message);
      }
    });
  }

  // Login handler
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const username = document.getElementById("loginUsername").value;
      const password = document.getElementById("loginPassword").value;

      // Send login request to backend
      const response = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        window.location.href = "home.html"; // Redirect to home page
      } else {
        alert(data.message);
      }
    });
  }
});