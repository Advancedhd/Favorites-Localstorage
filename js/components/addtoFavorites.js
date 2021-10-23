import { getCurrentFavs } from "../utilites/getStorage.js";

export function addtoFavorites() {
  const favButtons = document.querySelectorAll(".favbutton");

  favButtons.forEach((button) => {
    button.addEventListener("click", addtofavClick);
  });

  function addtofavClick() {
    const id = this.dataset.id;

    const currentFavorites = getCurrentFavs();

    const articleExists = currentFavorites.find(function (favorites) {
      return favorites.id === id;
    });

    if (articleExists === undefined) {
      const article = { id: id };
      currentFavorites.push(article);
      saveFavs(currentFavorites);
    } else {
      const newFavorites = currentFavorites.filter(
        (favorites) => favorites.id !== id
      );
      saveFavs(newFavorites);
    }
  }

  function saveFavs(favorites) {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
}
