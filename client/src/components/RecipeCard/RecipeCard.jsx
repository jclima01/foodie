import React from "react";

const RecipeCard = ({ recipe }) => {

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
    </div>
  );
};

export default RecipeCard;
