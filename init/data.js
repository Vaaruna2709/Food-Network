const ingredients = require("./ingredients");

const recipes = [
     //Set 1:  potatoes,mixed vegetables ,cornflour, ginger-garlic paste,garam masala,salt,oil
        {
          name: "Cornflour Veg Cutlets",
          ingredients: [
            "1 cup boiled and mashed potatoes",
            "1/2 cup boiled mixed vegetables (carrots, peas, beans)",
            "1/4 cup cornflour",
            "1/4 cup breadcrumbs",
            "1 tsp ginger-garlic paste",
            "1 green chili, finely chopped",
            "1/2 tsp garam masala",
            "Salt to taste",
            "Oil for frying"
          ],
         
          recipe: "Mix together mashed potatoes, mixed vegetables, green chili, ginger-garlic paste, garam masala powder, red chili powder, turmeric powder, chopped coriander leaves, and salt.Shape the mixture into round or oval cutlets.Coat each cutlet in cornflour, then bread crumbs.Fry in hot oil until golden brown and crispy on both sides.Drain on paper towels and serve hot with ketchup or chutney",
         
          cooking_duration: "30 minutes"
        },
        {
          name: "Cornflour Paneer Cutlets",
          ingredients: [
            "200g paneer, grated",
            "1/2 cup boiled and mashed potatoes",
            "1/4 cup cornflour",
            "1/4 cup breadcrumbs",
            "1 tsp ginger-garlic paste",
            "1 green chili, finely chopped",
            "1/2 tsp chaat masala",
            "Salt to taste",
            "Oil for frying"
          ],
        
          recipe: "In a mixing bowl, combine grated paneer, mashed potatoes, green chili, ginger-garlic paste, garam masala powder, red chili powder, turmeric powder, chopped coriander leaves, and salt. Mix well until all ingredients are thoroughly combined.Shape the mixture into small round or oval cutlets.Heat oil in a frying pan over medium heat.Meanwhile, coat each cutlet evenly with cornflour, shaking off any excess.Dip the cornflour-coated cutlets into bread crumbs, ensuring they are coated evenly.Fry the cutlets in hot oil until they are golden brown and crispy on both sides.Once fried, remove the cutlets from the oil and drain them on paper towels to remove excess oil.Serve the Cornflour Paneer Cutlets hot with your favorite chutney or dipping sauce.",
          cooking_duration: "30 minutes"
        },
        {
          name: "Cornflour Spinach Cutlets",
          ingredients: [
            "1 cup spinach, blanched and chopped",
            "1/2 cup boiled and mashed potatoes",
            "1/4 cup cornflour",
            "1/4 cup breadcrumbs",
            "1 tsp ginger-garlic paste",
            "1 green chili, finely chopped",
            "1/2 tsp cumin powder",
            "Salt to taste",
            "Oil for frying"
          ],
         
          recipe: "In a mixing bowl, combine finely chopped spinach, boiled and mashed potatoes, cornflour, bread crumbs, green chili (if using), ginger-garlic paste, garam masala powder, cumin powder, turmeric powder, and salt. Mix well until all ingredients are thoroughly combinedShape the mixture into small round or oval cutlets.Heat oil in a frying pan over medium heat.Coat each cutlet evenly with additional cornflour, shaking off any excess.Fry the cutlets in hot oil until they are golden brown and crispy on both sides, turning them carefully to ensure even cooking.Once fried, remove the cutlets from the oil and drain them on paper towels to remove excess oil.Serve the Cornflour Spinach Cutlets hot with mint chutney, tamarind sauce, or any dipping sauce of your choice..",
          cooking_duration: "30 minutes"
        },
      
    
    // Set 2: 1 cup all-purpose flour, cocoa powder,granulated sugar,unsalted butter, eggs, vanilla extract, milk,baking powder, salt
    {
        name:"Chocolate Cupcakes",
        ingredients: ["1 cup flour", "1/2 cup cocoa powder", "1 cup sugar", "1/2 cup butter", "2 eggs", "1 tsp baking powder", "1/4 tsp salt"],
       
        recipe: "Preheat oven to 350°F (175°C). Line a muffin tin with cupcake liners.In a bowl, sift together flour, cocoa powder, baking powder, and salt.In another bowl, cream together butter and sugar until light and fluffy.Beat in eggs, one at a time, then stir in vanilla extract.Gradually mix in the flour mixture alternately with milk, beginning and ending with the flour mixture.Pour batter into cupcake liners, filling them 2/3 full.Bake for 18-20 minutes or until a toothpick inserted into the center comes out clean.Allow cupcakes to cool completely before frosting.",
        cooking_duration: "35 minutes"
    },
    {   
        name:" Chocolate Chip Cookies",
        ingredients: [
            "2 1/4 cups all-purpose flour",
            "1/2 cup cocoa powder",
            "1 cup granulated sugar",
            "1 cup brown sugar, packed",
            "1 cup unsalted butter, softened",
            "2 large eggs",
            "1 teaspoon vanilla extract",
            "1 teaspoon baking soda",
            "1/2 teaspoon salt",
            "1 1/2 cups chocolate chips"
        ],
       
        
        recipe: `
        Preheat oven to 350°F (175°C). Line baking sheets with parchment paper.
        In a bowl, sift together flour, cocoa powder, baking soda, and salt.
        In another bowl, cream together butter, granulated sugar, and brown sugar until light and fluffy.
        Beat in eggs, one at a time, then stir in vanilla extract.
        Gradually mix in the flour mixture until combined.
        Fold in chocolate chips.
        Drop spoonfuls of dough onto prepared baking sheets.
        Bake for 10-12 minutes or until edges are set and centers are still soft.
        Allow cookies to cool on baking sheets for 5 minutes before transferring to wire racks to cool completely.
        `,
        cooking_duration: "20 minutes"
    },
    {
        name: "Chocolate Pudding",
        ingredients: [
            "1/2 cup granulated sugar",
            "1/4 cup cocoa powder",
            "3 tablespoons cornstarch",
            "Pinch of salt",
            "2 3/4 cups milk",
            "2 tablespoons unsalted butter",
            "1 teaspoon vanilla extract"
        ],
       
        recipe: `
        In a saucepan, whisk together sugar, cocoa powder, cornstarch, and salt.
        Gradually whisk in milk until smooth.
        Cook over medium heat, stirring constantly, until mixture thickens and boils.
        Boil and stir for 1 minute. Remove from heat.
        Stir in butter and vanilla extract until smooth.
        Pour into serving dishes or bowls.
        Cover with plastic wrap, pressing wrap onto surface of pudding to prevent a skin from forming.
        Chill in refrigerator for at least 2 hours before serving.
        `,
        cooking_duration: "30 minutes"
    },
    
    // Set 3: Flour, Sugar, Butter, Eggs, Milk, Baking Powder, Salt
    {
        name: "Classic Vanilla Cupcakes",
        ingredients: [
            "1 1/2 cups all-purpose flour",
            "1 cup granulated sugar",
            "1/2 cup unsalted butter, softened",
            "2 large eggs",
            "1/2 cup milk",
            "1 1/2 tsp baking powder",
            "1/4 tsp salt",
            "1 tsp vanilla extract"
        ],
       
        recipe: "In a medium bowl, whisk together dry ingredients: flour, baking powder, and salt. In a second bowl (or bowl of your stand mixer), beat together softened butter and sugar on medium-high speed for 5 minutes until thick and fluffy. Beat in eggs one at a time, mixing to incorporate with each egg then blend in vanilla and scrape down the bowl. Reduce mixer to medium speed and add the flour in thirds, alternating with adding the 1/2 cup milk and beating well between additions. Pour batter into 12 lined muffin tins, filling 2/3 full. Bake in the center of the oven at 350˚F for 20-23 minutes, or until a toothpick inserted into the center comes out clean. Let cool 5 minutes in the pan then remove cupcakes to a wire rack to cool completely.",
        cooking_duration: "30 minutes"
    },
    {
        name: "Fluffy Pancakes",
        ingredients: [
            "1 1/2 cups all-purpose flour",
            "3 1/2 tsp baking powder",
            "1 tsp salt",
            "1 tbsp white sugar",
            "1 1/4 cups milk",
            "1 egg",
            "3 tbsp butter, melted"
        ],
       
        recipe: "Preheat your good quality, non-stick pan or griddle on medium heat first. Once it’s hot, lower the heat down to low-medium heat. Wait about two minutes. This part is crucial and so worth it. Lightly grease the pan with a small amount of butter (yes, even on non-stick pans), and wipe away any excess butter with a sheet of paper towel. Use a ¼ cup measuring cup to pour your batter so you get perfect, evenly sized pancakes. Start pouring from the middle, then continue pouring slowly in a circular motion so that the batter spreads into perfect round shapes. Allow the pancakes to cook properly! Don’t rush them on high heat, or flip them too early. Let that under-side cook to a beautiful golden brown colour, and when bubbles start forming on top and around the surface (batter side), they are ready to flip.",
        cooking_duration: "20 minutes"
    },
    {
        name: "Simple Sugar Cookies",
        ingredients: [
            "2 3/4 cups all-purpose flour",
            "1 tsp baking powder",
            "1/2 tsp salt",
            "1 cup unsalted butter, softened",
            "1 1/2 cups white sugar",
            "1 egg",
            "1 tsp vanilla extract"
        ],
      
        recipe: "Beat sugar, butter, egg, and vanilla in one bowl; mix flour and leaveners in another. Gradually blend the flour mixture into the butter mixture. Roll the dough into balls and bake until the edges are golden.",
        cooking_duration: "25 minutes"
    },
    
  
    //Set 4:spaghetti,olive oil,garlic,tomatoes, basil, cheese,salt
    
   {
            name: "Garlic Tomato Basil Spaghetti",
            ingredients: [
                "8 oz spaghetti",
                "2 tablespoons olive oil",
                "4 cloves garlic, minced",
                "2 cups fresh tomatoes, diced",
                "1/4 cup fresh basil, chopped",
                "1/4 cup grated Parmesan cheese",
                "Salt and freshly ground black pepper to taste"
            ],
            
            recipe: "Cook pasta according to package instructions. Drain and set aside. While pasta cooks, heat a large skillet over medium heat. Add olive oil. Once hot, add minced garlic and sauté for 30 seconds, careful not to burn it. Add freshly diced tomatoes and cook, stirring, about 2 to 3 minutes. Add fresh ground black pepper to taste. Sprinkle with 2 tablespoons of Parmesan cheese. Add fresh chopped basil. Serve mixture over hot cooked spaghetti noodles. Garnish with remaining Parmesan cheese. Serve immediately.",
            cooking_duration: "25 minutes"
    },
    {
            name: "Roasted Tomato Basil Penne",
            ingredients: [
                "10 oz penne pasta",
                "3 tablespoons olive oil",
                "5 cloves garlic, minced",
                "4 large tomatoes, quartered",
                "1/3 cup fresh basil, torn",
                "1/3 cup grated Parmesan cheese",
                "Salt and freshly ground black pepper to taste"
            ],
            image:"r18.jpg",
            recipe: "Preheat oven to 400°F (200°C). Place quartered tomatoes on a baking sheet, drizzle with 1 tablespoon of olive oil, and season with salt and pepper. Roast in the preheated oven for 20 minutes. While tomatoes are roasting, cook penne pasta according to package instructions. Drain and set aside. In a large skillet, heat the remaining 2 tablespoons of olive oil over medium heat. Add minced garlic and sauté for 30 seconds. Add roasted tomatoes to the skillet and cook for another 2 minutes. Toss in the cooked penne and mix well. Stir in torn basil leaves, and season with additional salt and pepper if needed. Serve with grated Parmesan cheese. Serve hot.",
            cooking_duration: "35 minutes"
     },
    {
            name: "Fresh Tomato Basil Fusilli",
            ingredients: [
                "8 oz fusilli pasta",
                "2 tablespoons olive oil",
                "3 cloves garlic, minced",
                "3 cups cherry tomatoes, halved",
                "1/4 cup fresh basil, chopped",
                "1/4 cup grated Parmesan cheese",
                "Salt and freshly ground black pepper to taste"
            ],
            image:"r18.jpg",
            recipe: "Cook pasta according to package instructions. Drain and set aside. While pasta cooks, heat a large skillet over medium heat. Add olive oil. Once hot, add minced garlic and sauté for 30 seconds. Add halved cherry tomatoes and cook, stirring, for about 2 to 3 minutes. Add fresh ground black pepper to taste. Sprinkle with 2 tablespoons of Parmesan cheese. Add fresh chopped basil. Serve mixture over hot cooked fusilli noodles. Garnish with remaining Parmesan cheese. Serve immediately.",
            cooking_duration: "25 minutes"
    },
    
    
    
    // Set 5: Potatoes, Olive Oil, Garlic, Rosemary, Parmesan
    
    {
            name: "Herbed Potato Wedges",
            ingredients: [
                "4 medium russet potatoes",
                "1/4 cup olive oil",
                "2 cloves garlic, minced",
                "1 tsp dried rosemary",
                "Salt and pepper to taste",
                "1 tbsp parsley, chopped",
                "1 tsp thyme",
                "1 tsp oregano"
            ],
            image:"r18.jpg",
            recipe: "Preheat oven to 450 degrees F (230 degrees C). In a large bowl, toss potato wedges with oil. Arrange in a single layer in a roasting pan. Bake in preheated oven for 50 minutes. Sprinkle with parsley, thyme, oregano, salt, and pepper. Bake for 10 minutes, or until golden brown.",
           cooking_duration: "60 minutes"
    },
    {
           name: "Rosemary Garlic Potato Medley",
           ingredients: [
                "5 large russet potatoes",
                "1/3 cup olive oil",
                "4 cloves garlic, minced",
                "1.5 tsp fresh rosemary, chopped",
                "1 tbsp mustard",
                "Salt and pepper to taste"
            ],
            image:"r18.jpg",
          recipe: "Preheat your oven to 425 degrees F (220 degrees C). Bring a large pot of salted water to boil. While the water is heating, combine olive oil, minced garlic, rosemary, mustard, and some black pepper. Mix this in a bowl large enough to add your potatoes to. When the water is boiling, add the potatoes and boil for about 10 minutes or until they are easily pierced with a fork. Drain, and then toss with the mustard mixture. Line a baking sheet with parchment and spread the potatoes out evenly. Sprinkle with some kosher salt and bake for 12-15 minutes or until the skins are browning and sizzling. Scrape those delicious bits off the foil, sprinkle them over the potatoes, and then garnish with a few sprigs of rosemary.",
          cooking_duration: "45 minutes"
     },
    {
         name: "Crispy Rosemary Garlic Potato Slices",
        ingredients: [
                "6 medium russet potatoes",
                "1/4 cup olive oil",
                "5 cloves garlic, minced",
                "2 tsp rosemary",
                "Salt and pepper to taste"
            ],
            image:"r18.jpg",
          recipe: "Heat grill to medium and simmer the potatoes in salted water for 3 minutes. Drain well, tip into a shallow baking tray, then gently toss with the oil, garlic, rosemary, and seasoning. Spread out in one layer and grill for 10-15 minutes or until crisp and golden.",
          cooking_duration: "35 minutes"
    },
    
    
    //Set 6: Sugar ,flour,  cornstarch, salt,water, lemons- juiced and zested,  butter,  yolks, pie crust, egg whites
  
        {
          name: "Lemon Meringue Pie",
          ingredients: [
            "1 cup sugar",
            "1/2 cup flour",
            "1/4 cup cornstarch",
            "1/4 tsp salt",
            "1 1/2 cups water",
            "2 lemons, juiced and zested",
            "2 tbsp butter",
            "4 egg yolks",
            "1 pie crust",
            "4 egg whites"
          ],
          image:"r18.jpg",
          recipe: "In medium bowl, mix flour and salt. Cut in shortening, using pastry blender (or pulling 2 table knives through ingredients in opposite directions), until mixture forms coarse crumbs the size of small peas. Sprinkle with cold water, 1 tablespoon at a time, tossing with fork until flour mixture is moistened and can be pressed into a ball.Shape into flattened round on lightly floured surface. Wrap in plastic wrap; refrigerate about 45 minutes or until dough is cold.Heat oven to 450°F. With floured rolling pin, roll pastry on lightly floured surface into round 2 inches larger than upside-down 9-inch glass pie plate. Fold pastry into fourths; place in pie plate, or roll pastry loosely around rolling pin and transfer to pie plate. Unfold or unroll pastry and ease into plate, pressing firmly against bottom and side. Trim overhanging edge of pastry 1 inch from rim of pie plate. Fold and roll pastry under, even with plate; flute as desired. Prick bottom and side of pastry thoroughly with fork to prevent puffing. Bake 13 to 15 minutes or until light brown; cool on cooling rack.Reduce oven temperature to 350°F. In small bowl, beat egg yolks with fork. In 2-quart saucepan, mix 1 1/2 cups sugar and the cornstarch; gradually stir in 1 1/2 cups water. Cook over medium heat, stirring constantly, until mixture thickens and boils. Boil and stir 1 minute.Immediately stir with whisk at least half of hot mixture into egg yolks; stir back into hot mixture in saucepan. Return to boiling; boil and stir constantly 2 minutes; remove from heat. Stir in butter, lemon zest and lemon juice with whisk. Cover and keep warm.In medium bowl, beat egg whites and cream of tartar with electric mixer on high speed until foamy. Beat in sugar, 1 tablespoon at a time; scrape side of bowl occasionally. Continue beating until stiff, glossy peaks form and sugar is completely dissolved. Beat in vanilla. Pour hot lemon filling into baked pie shell. Immediately drop spoonfuls of meringue onto hot lemon filling, and carefully spread meringue to cover top completely, spreading to edge of crust to prevent shrinkage or weeping.Bake 20 to 25 minutes or until meringue is browned and temperature reaches 160°F. Cool on cooling rack 1 hour. Refrigerate about 4 hours or until filling is set. Store loosely covered in refrigerator."
        },
        {
          name: "Lemon Bars",
          ingredients: [
            "1 1/2 cups flour",
            "1/4 cup cornstarch",
            "1/4 tsp salt",
            "1/2 cup sugar",
            "1 cup butter",
            "4 lemons, juiced and zested",
            "1 1/2 cups sugar",
            "4 egg yolks",
            "1/4 cup water",
            "4 egg whites"
          ],
          image:"r18.jpg",
          recipe: " In a large bowl, combine the crust ingredients with an electric mixer until the mixture resembles coarse crumbs. Press the mixture down into an ungreased 13- x 9-inch baking pan. Bake at 350 degrees F until lightly golden brown around the edges. While the base layer is baking, whisk together the filling ingredients in a large bowl.Add filling and bake: Pour the lemon filling over the shortbread crust while it is still warm from the oven. Then, bake it until the topping appears to be set and is just beginning to lightly brown Allow the bars to cool completely at room temperature.Sprinkle the top of the cooled Lemon Bars with powdered sugar. This is done easily with a dusting wand.",
          cooking_duration: "50 minutes"
        },
        {
          name: "Lemon Custard Tart",
          ingredients: [
            "1 pie crust",
            "1 cup sugar",
            "1/4 cup cornstarch",
            "1/4 tsp salt",
            "1 1/2 cups water",
            "3 lemons, juiced and zested",
            "3 tbsp butter",
            "4 egg yolks",
            "4 egg whites"
          ],
          image:"r18.jpg",
          recipe: " To make the crust, combine flour, sugar, and salt in a food processor. Add cold butter cubes and pulse until mixture resembles coarse crumbs. Add egg yolk and ice water, pulsing until dough starts to come together. Shape into a disk, wrap in plastic wrap, and chill in the refrigerator.Preheat oven. Roll out dough on a floured surface to fit a tart pan. Press dough into the pan, trim excess, and prick bottom with a fork. Bake until golden brown. Cool completely.For the lemon custard filling, whisk sugar, cornstarch, and salt in a saucepan. Gradually whisk in water until smooth. Cook over medium heat until thickened. Whisk egg yolks and gradually add hot sugar mixture. Cook until thickened, remove from heat, and whisk in lemon zest, lemon juice, and butter. Pour into cooled tart crust and chill until set.Before serving, dust with powdered sugar and garnish with fresh berries if desired. Serve chilled.",
          cooking_duration: "40 minutes"
        }
      
    
];
module.exports = recipes;