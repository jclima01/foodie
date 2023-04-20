import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../../components/SearchBar/SearchBar";
import GridCards from "../../components/GridCards/GridCards";

const SearchRecipe = () => {
  const recipes = useSelector((state) => state.recipes);

  return (
    <div>
      <SearchBar />
      <GridCards recipes={recipes} />
    </div>
  );
};

export default SearchRecipe;
