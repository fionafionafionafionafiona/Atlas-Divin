// On commence par créer deux variables JavaScript,
// pour sélectionner chacune un des deux boutons (light et dark)
const toggleDarkModeBtn = document.querySelector("#dark-mode-btn");
const toggleLightModeBtn = document.querySelector("#light-mode-btn");

// Clic sur "Dark mode" → passage au thème sombre
toggleDarkModeBtn.addEventListener("click", function () {
  // Lors du clic sur le bouton "Dark mode", nous voulons que
  // l'attribut data-theme de la balise <html> prenne pour valeur "dark"
  document.querySelector("html").setAttribute("data-theme", "dark");
});

// Clic sur "Light mode" → passage au thème clair
toggleLightModeBtn.addEventListener("click", function () {
  // Lors du clic sur le bouton "Light mode", nous voulons que
  // l'attribut data-theme de la balise <html> prenne pour valeur "light"
  document.querySelector("html").setAttribute("data-theme", "light");
});
