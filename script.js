
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-theme");
  const body = document.body;

  // Apply saved theme on page load
  if (localStorage.getItem("theme") === "dark") {
      body.classList.toggle("dark");
  }

  // Toggle theme on button click
  toggleBtn.addEventListener("click", () => {
      console.log("Button clicked!");
      body.classList.toggle("dark");
      localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
  });
});