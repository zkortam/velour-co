// Creating the recipe card
class RecipeCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
set data(recipeData) {
    // Create content inside the shadow DOM
    this.shadowRoot.innerHTML = `
      <h2>${recipeData.name}</h2>
      <p>Author: ${recipeData.author}</p>
      <img src="${recipeData.image}" alt="${recipeData.name}" style="width:100px;height:auto;">
      <p>Tags: ${recipeData.tags}</p>
      <p>Ingredients: ${recipeData.ingredients}</p>
      <p>Steps: ${recipeData.steps}</p>
      <button class='delete-btn'>Delete</button>
    `;
    delete_card(this.shadowRoot,this);
  }   
}

customElements.define('recipe-card', RecipeCard);

function create_card() {
    const recipeName  = document.getElementById('recipeName').value;
    const authorName  = document.getElementById('authorName').value;
    const image       = document.getElementById('image').value;
    const tags        = document.getElementById('tagsDropdown').value;
    const customTag   = document.getElementById('customTag').value;
    const ingredients = document.getElementById('ingredients').value;
    const recipe      = document.getElementById('recipe').value;

    const recipeCard = document.createElement('recipe-card');

    recipeCard.data = {
        name: recipeName,
        author: authorName,
        image: image,
        tags: tags + (customTag ? `, ${customTag}` : ''),
        ingredients: ingredients,
        steps: recipe
    };

    document.getElementById('cardsContainer').appendChild(recipeCard);

    return recipeCard
}

function delete_card(shadowRoot, hostElement) {
    const deleteButton = shadowRoot.querySelector('.delete-btn');
    if(deleteButton) {
        deleteButton.addEventListener('click', () => {
            hostElement.remove();
        });
    }
}