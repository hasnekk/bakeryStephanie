// Light / dark theme toggle. Persists the choice in localStorage.
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");

  if (!toggle) return;

  toggle.addEventListener("click", function () {
    const current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
    const next = current === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
})();
