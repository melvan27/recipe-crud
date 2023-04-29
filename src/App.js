import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  // holds the list of recipes
  const [recipes, setRecipes] = useState(RecipeData);
  // handles deleting a recipe from the list
  const handleDelete = (clicked) => {
    const filteredList = recipes.filter(
      (recipe, index) => index !== clicked
    );
    setRecipes(filteredList);
  };

  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} onDelete={handleDelete} />
      <RecipeCreate recipes={recipes} setRecipes={setRecipes} />
    </div>
  );
}

export default App;
