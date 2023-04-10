import React from "react";
import s from "./RecipeCard.module.css"
const RecipeCard = ({ recipe }) => {

  return (
    <div className={s.cardContainer}>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
    </div>
  );
};

export default RecipeCard;
