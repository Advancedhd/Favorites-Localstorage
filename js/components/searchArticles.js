import { renderArticles } from "./renderArticles.js";

export function searchArticles(article) {
  const errordiv = document.querySelector(".error");
  const search = document.querySelector(".search");

  search.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();

    const filteredArticles = article.filter(function (article) {
      if (article.title.toLowerCase().startsWith(searchValue)) {
        errordiv.innerHTML = ``;
        return true;
      } else {
        return false;
      }
    });

    if (filteredArticles.length === 0) {
      errordiv.innerHTML = `<h1>No Title by the name: ${searchValue}</h1>`;
    }
    renderArticles(filteredArticles);
  };
}
