import React from "react";

function RecipeList(props) {
  // recipes from App.js
  const recipes = props.recipes;
  // table
  return (
    <div className="recipe-list">
      <table>
        <thead>
        {/* header for table */ }
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        {/* adding recipes to table */ }
        <tbody>
          {recipes.map((recipe, index) => (
            <tr key={index}>
              <td>{recipe.name}</td>
              <td>{recipe.cuisine}</td>
              <td><img src={recipe.photo} alt={recipe.name} width="100%" height="100%" /></td>
              <td className="content_td"><p>{recipe.ingredients}</p></td>
              <td className="content_td"><p>{recipe.preparation}</p></td>
              <td><button name="delete" onClick={() => props.onDelete(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;