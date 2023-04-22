import React from "react";
import s from "./RecipeCard.module.css"
import { useNavigate } from "react-router-dom";
const RecipeCard = ({ recipe }) => {
const navigate = useNavigate()
const handleNavigate = () =>{
  navigate(`/detail/${recipe.id}`)
}
  return (
    <div className={s.cardContainer} onClick={handleNavigate}>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className={s.img}/>
    </div>
  );
};

export default RecipeCard;
