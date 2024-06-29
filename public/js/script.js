
document.addEventListener('DOMContentLoaded', () => {
    const hearts = document.querySelectorAll(".heart");
 
    let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
   console.log(savedRecipes);
    // Function to update UI based on savedRecipes
    const updateUI = () => {
        hearts.forEach(heart => {
            const index = Number(heart.dataset.index);
            if (savedRecipes.includes(index)) {
                heart.classList.add('saved');
            } else {
                heart.classList.remove('saved');
            }
        });
    };

    // Initial UI update
    updateUI();

    // Event listener for heart clicks
    hearts.forEach(heart => {
        heart.addEventListener("click", () => {
            const index = Number(heart.dataset.index);
            if (savedRecipes.includes(index)) {
                savedRecipes = savedRecipes.filter(recipeIndex => recipeIndex !== index);
                heart.classList.remove("saved");
            } else {
                savedRecipes.push(index);
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
         .then(response => console.log("Received data:", response.data))
         .catch(error => console.error("Error fetching saved recipes:", error));
       
         window.location.href = url;
    });
          let dropdown =document.getElementById('filter');
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
});
