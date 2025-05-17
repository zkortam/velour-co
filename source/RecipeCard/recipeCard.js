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
      <ul>
        ${recipeData.tags.map(tag => `<li>${tag}</li>`).join('')}
      </ul>
      <p>Ingredients: ${recipeData.ingredients}</p>
      <p>Steps: ${recipeData.steps}</p>
      <button class='delete-btn'>Delete</button>
    `;
    delete_card(this.shadowRoot,this);
    update_card(this.shadowRoot, this, recipeData);
  }   
}

customElements.define('recipe-card', RecipeCard);

function create_card() {
    const recipeName     = document.getElementById('recipeName').value;
    const authorName     = document.getElementById('authorName').value;
    const image          = document.getElementById('image').value;
    const predefinedTag  = document.getElementById('tagsDropdown').value;
    const customTag      = document.getElementById('customTag').value;
    const ingredients    = document.getElementById('ingredients').value;
    const recipe         = document.getElementById('recipe').value;

    //generate array of tags
    const tagsArray = [];
    if(predefinedTag) {
        tagsArray.push(predefinedTag);
    }
    if(customTag) {
        //split custom tags by comma and place tags into array
        const customTags = 
        customTag.split(',')                                                    //split by comma
        .map(tag => tag.trim())                                                 //trim whitespace
        .filter(Boolean)                                                        //filter out empty strings
        .map(tag => tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase());  //captialize custom tags to match predefined tags
        tagsArray.push(...customTags);
    }

    const recipeCard = document.createElement('recipe-card');

    recipeCard.data = {
        name: recipeName,
        author: authorName,
        image: image,
        tags: tagsArray,
        ingredients: ingredients,
        steps: recipe
    };

    document.getElementById('cardsContainer').appendChild(recipeCard);

    return recipeCard;
}

function update_card(shadowRoot, hostElement, recipeData){
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    shadowRoot.appendChild(editButton);

    editButton.addEventListener('click', () => {
        const originalData   = { ...recipeData };

        //Can add more tags as we implement card (remember to edit HTML to sync)
        const predefinedTags = ["Easy", "Advanced", "Pro"];
        const originalTags   = recipeData.tags;

        //separate tags originally selected
        const predefinedSelectedTags = originalTags.filter(tag => predefinedTags.includes(tag));
        const customTags = originalTags.filter(tag => !predefinedTags.includes(tag));

        //innerHTML for tagging done outside shadowRoot for sake of readability
        const editPredefinedTags = predefinedTags.map(tag => `
            <label>
                <input type="checkbox" class="edit-tag-checkbox" value="${tag}" ${predefinedSelectedTags.includes(tag) ? 'checked' : ''}>${tag}
            </label><br>
            `).join('');

        const editCustomTags = `
            <label>
            Custom Tags :<input type="text" class="edit-custom-tags" value="${customTags.join(', ')}" />  
            </label>
        `;

        shadowRoot.innerHTML = `
        <label>Name: <input type="text" value="${originalData.name}" class="edit-name"></label><br>
        <label>Author: <input type= "text" value="${originalData.author}" class="edit-author"></label><br>
        <label>Image: <input type="text" value="${originalData.image}" class="edit-image"></label><br>
        <fieldset>
            <legend>Tags:</legend>
            ${editPredefinedTags}
            ${editCustomTags}
        </fieldset>
        <label>Ingredients: <textarea class ="edit-ingredients">${originalData.ingredients}</textarea></label><br>
        <label>Recipe: <textarea class="edit-recipe">${originalData.recipe}</textarea></label><br>
        <button class="save-btn">Save</button>
        `;
        
        const saveButton = shadowRoot.querySelector('.save-btn');
        saveButton.addEventListener('click', () => {
        //tag handling: 
            //predefined tags
            const checkedTags    = [];
            const checkBoxedTags = shadowRoot.querySelectorAll('.edit-tag-checkbox'); 
            
            checkBoxedTags.forEach(checkbox => {
                if(checkbox.checked) {
                    checkedTags.push(checkbox.value);
                }
            });

            //custom tags
            const editedCustomTags =shadowRoot.querySelector('.edit-custom-tags').value;
            const savedCustomTags = editedCustomTags.split(',').map(tag => tag.trim()).filter(Boolean);

            const allEditedTags = checkedTags.concat(savedCustomTags);
        

            const updatedData = {
                name: shadowRoot.querySelector('.edit-name').value,
                author: shadowRoot.querySelector('.edit-author').value,
                image: shadowRoot.querySelector('.edit-image').value,
                tags: allEditedTags,
                ingredients: shadowRoot.querySelector('.edit-ingredients').value,
                recipe: shadowRoot.querySelector('.edit-recipe').value
            };

            let hasChanges = false;
            const finalData = { ...originalData};

            for(const key in updatedData) {
                if (updatedData[key] !== originalData[key]) {
                    finalData[key] = updatedData[key];
                    hasChanges = true;
                }
            }

            if (hasChanges) {
                hostElement.data = finalData;
            } else {
                hostElement.data = originalData;
            }
        });
    });
}


function delete_card(shadowRoot, hostElement) {
    const deleteButton = shadowRoot.querySelector('.delete-btn');
    if(deleteButton) {
        deleteButton.addEventListener('click', () => {
            hostElement.remove();
        });
    }
}