

const express = require("express");
const app = express();
const ejsMate = require("ejs-mate");
const path = require('path');
const bodyParser = require('body-parser');
let savedRecipes=[];
const recipes = require("./init/data.js");
const ingredients = require('./init/ingredients.js');


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("ejs", ejsMate);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const parseCookingDuration = (durationString) => {

    const matches = durationString.match(/\d+/); // Extract numbers from string
    return matches ? parseInt(matches[0]) : 0; // Parse first number found, default to 0 if no number found
};


app.get("/", async(req,res)=>{
    res.render('pages/index',{ingredients});
});

app.get("/recipe_no/:index",async(req,res)=>{
   
    let {index} = req.params;
    index =index*3;
    let noOfCards =3;
    res.render("pages/recipe",{index,recipes,noOfCards});
   
});
app.get("/cuisine",(req,res)=>{
   
    
    const cuisine = req.query.cuisine;
    if (cuisine) {
        const filteredRecipes = recipes.filter(recipe => cuisine === recipe.cuisine);
        const noOfCards = filteredRecipes.length;
        let index =0;
        res.render("pages/recipe",{recipes:filteredRecipes,index,noOfCards});
    }else{
        res.render("pages/cuisine")
    }
    
})
app.get("/cooking-duration",(req,res)=>{
   
    let {max} = req.query;
    // console.log(max);
  
    max = parseInt(max);

    if(max){
        const filteredRecipes = recipes.filter(recipe => {
            const duration = parseCookingDuration(recipe.cooking_duration);
            return duration <= max;
        });
        let index=0;
        let noOfCards = filteredRecipes.length
        console.log(noOfCards);
        res.render("pages/recipe",{recipes:filteredRecipes,index,noOfCards});
    }

        res.render("pages/duration");
  
     
  
  
    
})

app.get("/saved-recipes", (req, res) => {
    try {
     
        savedRecipes = JSON.parse(req.query.savedRecipes);
     
        console.log(savedRecipes);
        const filteredRecipes = recipes.filter(recipe => savedRecipes.includes(recipe.id));
        // console.log(filteredRecipes);
        
        const noOfCards = filteredRecipes.length;
        let index =0;
       res.render("pages/recipe",{recipes:filteredRecipes,index,noOfCards});
       
       

    } catch (e) {
        console.error("Error parsing savedRecipes:", e);
        res.status(500).send("Error processing request");
    }
});


app.use((req, res, next) => {
    if (req.url.endsWith('.wasm')) {
        res.setHeader('Content-Type', 'application/wasm');
    }
    next();
});


app.listen(8080,()=>{
    console.log("listening to port 8080");
});