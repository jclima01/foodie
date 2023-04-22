import GridCards from "../../components/GridCards/GridCards.jsx";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../redux/actions";
import Pagination from "../../components/Pagination/Pagination.jsx";
const Home = () => {
  const recipes = useSelector((state) => state.recipes);
  const dispatch = useDispatch();
  const [numPage, setNumPage] = useState(9);
  const [indexPage, setIndexPage] = useState(1);

  const initialPage = (indexPage - 1) * numPage;
  const finalPage = initialPage + numPage;

  const RecipeSlice = recipes.slice(initialPage, finalPage);
  useEffect(() => {
    dispatch(getRecipes());
  }, [indexPage]);

  return (
    <div>

      <section>
        <GridCards recipes={RecipeSlice} />
        <Pagination setIndexPage={setIndexPage} indexPage={indexPage} />
      </section>
    </div>
  );
};

export default Home;