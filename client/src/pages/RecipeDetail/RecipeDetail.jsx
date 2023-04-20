import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../../redux/actions";

const RecipeDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const recipe = useSelector((state) => state.recipe);
  useEffect(() => {
    dispatch(getRecipeById(id));
  });

  return (
    <div key={recipe.id}>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />


    </div>
  );
};

export default RecipeDetail;
