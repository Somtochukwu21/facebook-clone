let logoEl = document.getElementById("logo");

let searchEl = document.getElementById("search-icon");

let iconEl = document.getElementById("icon");

iconEl.style.background = "#046EE4";

logoEl.innerHTML =
  '<i id="logo" style="color:white;" class="fa-brands fa-facebook-f"></i>';

logoEl.style.fontSize = "32px";

let recentSearches = document.getElementById("recentSearches");

recentSearches.style.display = "none";

function getRecentSearches() {
  searchEl.style.display = "none";
  logoEl.innerHTML = '<i id="logo" class="fas fa-arrow-left"></i>';
  logoEl.style.fontSize = "20px";
  iconEl.style.background = "none";
  recentSearches.style.display = "flex";
}

function cancel() {
  searchEl.style.display = "flex";
  logoEl.innerHTML =
    '<i id="logo" style="color:white;" class="fa-brands fa-facebook-f"></i>';
  logoEl.style.fontSize = "32px";
  iconEl.style.background = "none";
  recentSearches.style.display = "none";
  iconEl.style.background = "#046EE4";
}

function deleteUserName() {
  const deletedUser = document.getElementById("deleteUser");
  // alert(deletedUser)
  deletedUser.style.display = "none";
}
