let logoEl = document.getElementById("logo");
let searchEl = document.getElementById("search-icon");
let iconEl = document.getElementById("icon");
iconEl.style.background = "#4496F9";
logoEl.innerHTML = '<i id="logo" class="fa-brands fa-facebook-f"></i>';
logoEl.style.fontSize = "30px";
// let iconSearchWrapper = document.getElementById("icon-search");
let recentSearches = document.getElementById("recentSearches");
// recentSearches.style.display = "none";

function getRecentSearches() {
  searchEl.style.display = "none";
  logoEl.innerHTML = '<i id="logo" class="fas fa-arrow-left"></i>';
  logoEl.style.fontSize = "20px";
  iconEl.style.background = "none";
  recentSearches.style.display = "flex";
  //   iconSearchWrapper.style.background = "#242526";
}

function cancel() {
  searchEl.style.display = "flex";
  logoEl.innerHTML = '<i id="logo" class="fa-brands fa-facebook-f"></i>';
  logoEl.style.fontSize = "30px";
  iconEl.style.background = "none";
  recentSearches.style.display = "none";
  iconEl.style.background = "#4496F9";
}
