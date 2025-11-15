(function () {
  const root = document.documentElement;
  const toggleBtn = document.getElementById("theme-toggle");
  const icon = document.getElementById("theme-toggle-icon");

  // Set year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Read stored theme or system preference
  const storedTheme = localStorage.getItem("theme");
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const initialTheme = storedTheme || (prefersDark ? "dark" : "light");
  root.setAttribute("data-theme", initialTheme);

  function updateIcon(theme) {
    if (!icon) return;
    icon.textContent = theme === "dark" ? "🌙" : "☀️";
  }

  updateIcon(initialTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      const current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
      const next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      updateIcon(next);
    });
  }
})();
