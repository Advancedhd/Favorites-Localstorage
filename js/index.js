import { renderArticles } from "./components/renderArticles.js";
import { searchArticles } from "./components/searchArticles.js";
import { displayMessage } from "./ui/displayMessage.js";
import { addtoFavorites } from "./components/addtoFavorites.js";
import { baseUrl } from "./settings/api.js";

async function getArticles() {
  try {
    const url = baseUrl + "articles";

    const response = await fetch(url);

    const json = await response.json();

    const article = json;

    renderArticles(article);
    searchArticles(article);
    addtoFavorites(article);
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".article-container");
  }
}

getArticles();
