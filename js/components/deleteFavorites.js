export function deleteFavorites() {
  const deletefavs = document.querySelector(".clear-button");
  const container = document.querySelector(".favorites-container");

  deletefavs.addEventListener("click", clearFavorites);

  function clearFavorites() {
    const deletealert = confirm("Are you sure you want to clear favorites?");

    if (!deletealert) {
      return;
    }
    localStorage.clear();

    container.innerHTML = `<h2 class="no-fav">Oh no! You have no favorites :(</h2>`;
  }
}
