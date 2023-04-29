import React, { useState } from "react";

function RecipeCreate({recipes, setRecipes}) {
  // initialize the form elements
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // Create a new recipe object
    const recipe = {
      name,
      cuisine,
      photo,
      ingredients,
      preparation,
    };

    // Add the recipe to the list of recipes
    setRecipes([...recipes, recipe]);

    // Clear the form contents
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  }

  // get the values from the form for submission
  return (
    <form onSubmit={handleSubmit} name="create">
      <table>
        <tbody>
          <tr>
            <td><input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /></td>
            <td><input type="text" name="cuisine" placeholder="Cuisine" value={cuisine} onChange={(e) => setCuisine(e.target.value)} /></td>
            <td><input type="text" name="photo" placeholder="URL" value={photo} onChange={(e) => setPhoto(e.target.value)} /></td>
            <td><textarea name="ingredients" placeholder="Ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} /></td>
            <td><textarea name="preparation" placeholder="Preparation" value={preparation} onChange={(e) => setPreparation(e.target.value)} /></td>
            <td><button type="submit">Create</button></td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;