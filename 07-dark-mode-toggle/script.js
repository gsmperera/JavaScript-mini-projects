const toggle = document.getElementById("tog");

toggle.addEventListener("change", (element) => {
  document.body.classList.toggle("dark", element.checked);
});
