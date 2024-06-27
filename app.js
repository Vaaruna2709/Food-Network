

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


app.get("/", async(req,res)=>{
    res.render('pages/index',{ingredients});
});

app.get("/recipe_no/:index",async(req,res)=>{
   
    let {index} = req.params;
    // console.log(index)
    res.render("pages/recipe",{index,recipes});
   
});
app.get("/saved-recipes", (req, res) => {
    try {
       
        savedRecipes = JSON.parse(req.query.savedRecipes);

        console.log("Parsed savedRecipes:", savedRecipes);
     
        res.render('pages/saved', { savedRecipes ,recipes});

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