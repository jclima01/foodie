import React, { useState, useEffect } from "react";
import axios from "axios";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(9);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://api.spoonacular.com/recipes?number=${recipesPerPage}&offset=0&apiKey=21742d833c494e6da644c49697147212&number=100&addRecipeInformation=true`
      );
      setRecipes(res.data);
      setLoading(false);
    };

    fetchRecipes();
  }, [recipesPerPage]);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderRecipes = () => {
    if (loading) {
      return <div>Loading recipes...</div>;
    }

    return (
      <ul>
        {currentRecipes.map((recipe) => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    );
  };

  const renderPagination = () => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(recipes.length / recipesPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      {renderRecipes()}
      {renderPagination()}
    </div>
  );
};

export default Recipes;
