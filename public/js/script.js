
document.addEventListener('DOMContentLoaded', () => {
    const hearts = document.querySelectorAll(".heart");
 
    let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
   console.log(savedRecipes);
   
    const updateUI = () => {
        hearts.forEach(heart => {
            const id = Number(heart.dataset.id);
            if (savedRecipes.includes(id)) {
                heart.classList.add('saved');
            } else {
                heart.classList.remove('saved');
            }
        });
    };

    updateUI();

    
    hearts.forEach(heart => {
        heart.addEventListener("click", () => {
            const id = Number(heart.dataset.id);
            if (savedRecipes.includes(id)) {
                savedRecipes = savedRecipes.filter(recipeId => recipeId !== id);
                heart.classList.remove("saved");
            } else {
                savedRecipes.push(id);
                heart.classList.add("saved");
            }
            localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
            updateUI();
        });
    });

    const savedRecipesLink = document.getElementById('savedRecipesLink');
    
    savedRecipesLink.addEventListener('click', function(event) {
        event.preventDefault();  

        const queryParams = new URLSearchParams({
            savedRecipes: JSON.stringify(savedRecipes)
        });
        
        const url = `/saved-recipes?${queryParams}`;
        axios.get(url)
         .then(response => console.log("Received data"))
         .catch(error => console.error("Error fetching saved recipes:", error));
       
         window.location.href = url;
    });
          let dropdown =document.getElementById('filter');
        if(dropdown){

          dropdown.addEventListener('change', function() {
            let selectedValue = this.value;
            let sortHeader = document.getElementById('sort-header');
            if (selectedValue === 'ingredients') {
              sortHeader.textContent = 'Select the ingredients';

            } else if (selectedValue === 'cooking_duration') {
              sortHeader.textContent = 'Select by Cooking Duration';
                const url = `/cooking-duration`;
                axios.get(url)
                .then(response => console.log("Received data:", response.data))
                .catch(error => console.error("Error fetching saved recipes:", error));
       
                 window.location.href = url;
             
            } else if (selectedValue === 'cuisine') {
              sortHeader.textContent = 'Select by Cuisine';
              const url = `/cuisine`;
              axios.get(url)
              .then(response => console.log("Received data:", response.data))
              .catch(error => console.error("Error fetching saved recipes:", error));
     
               window.location.href = url;
             
            }
        
  
          });
        }
});
