import React, { useEffect } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../redux/actions";

const GridCards = () => {
  const recipes = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default GridCards;
