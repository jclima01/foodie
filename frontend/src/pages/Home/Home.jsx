import GridCards from "../../components/GridCards/GridCards.jsx";
import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../components/Pagination/Pagination.jsx";
import { getRecipes } from "../../redux/actions/index.js";
const Home = () => {
  const recipes = useSelector((state) => state.recipes);
  const searchKey = useSelector((state) => state.searchKey);
  const dispatch = useDispatch();
console.log(searchKey)
  const [actualPage, setActualPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(9);

  const lastRecipeIndex = actualPage * recipesPerPage;
  const firstRecipeIndex = lastRecipeIndex - recipesPerPage;
  const recipeSlice = recipes.slice(firstRecipeIndex, lastRecipeIndex);
  const pagination = (pagNumber) => {
    setActualPage(pagNumber);
  };

  useEffect(() => {
    if (searchKey.length === 0) dispatch(getRecipes());

  }, [dispatch]);
  console.log(recipeSlice)
  return (
    <div className={styles.homeContainer}>
      <Pagination
        recipesPerPage={recipesPerPage}
        recipes={recipes.length}
        pagination={pagination}
      />
      <GridCards recipes={recipeSlice} />
    </div>
  );
};

export default Home;
