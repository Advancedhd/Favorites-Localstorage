import { baseUrl } from "./settings/api.js";
import { displayMessage } from "./ui/displayMessage.js";
import { deleteFavorites } from "./components/deleteFavorites.js";

const container = document.querySelector(".favorites-container");
const FavouriteFromLocalstorage = localStorage.getItem("favorites");
const ParsedLocalstorage = JSON.parse(FavouriteFromLocalstorage);

(async function () {
  try {
    for (let i = 0; i < ParsedLocalstorage.length; i++) {
      const articleUrl = baseUrl + "articles/" + ParsedLocalstorage[i].id;
      const response = await fetch(articleUrl);
      const article = await response.json();

      container.innerHTML += `<div class="article">
                                       <h2>Title:</h2> 
                                          <p>${article.title}</p>
                                       <h2>Summary:</h2> 
                                          <p>${article.summary}</p>
                                       <h2>Author:</h2> 
                                          <p>${article.author}/<p>
                                       </div>`;
    }
  } catch (error) {
    displayMessage("error", error, ".favorites-container");
  }
})();

deleteFavorites();

if (ParsedLocalstorage < 1 || ParsedLocalstorage === null) {
  container.innerHTML = `<h2 class="no-fav">Oh no! You have no favorites :(</h2>`;
}
