export function renderArticles(article) {
  const articleContainer = document.querySelector(".article-container");
  articleContainer.innerHTML = "";

  for (let i = 0; i < article.length; i++) {
    articleContainer.innerHTML += `<div class="article">
                                     <h2>Title:</h2> 
                                        <p>${article[i].title}</p>
                                    <h2>Summary:</h2> 
                                        <p>${article[i].summary}</p>
                                    <h2>Author:</h2> 
                                        <p>${article[i].author}</p>
                                        <button data-id="${article[i].id}"class="favbutton">Add to Favorites</button>
                                  </div>`;
  }
}
