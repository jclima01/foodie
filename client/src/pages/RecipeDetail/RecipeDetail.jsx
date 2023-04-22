import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getRecipeById } from "../../redux/actions";

const RecipeDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const recipe = useSelector((state) => state.recipe);
  useEffect(() => {
    dispatch(getRecipeById(id));
  }, []);
console.log(recipe.steps);
  return (
    <div key={recipe.id}>
      <div className="divimg">
        <img
          className="detailImg"
          src={
            recipe.image
              ? recipe.image
              : "https://images.unsplash.com/photo-1635321593217-40050ad13c74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1748&q=80"
          }
          alt="Pic not found"
        />
      </div>

      <h1 className="texts">{recipe.title}</h1>

      <div className="ddsh">
        <h2 className="texts">Diet Type: </h2>
        {recipe.diets?.map((diet) => {
          return (
            <h2 className="dishesanddiets" key={diet}>
              {diet}
            </h2>
          );
        })}
      </div>

      <div className="ddsh">
        <h3 className="texts">Summary: </h3>
        <p className="summary">{recipe.summary?.replace(/<[^>]*>/g, "")}</p>
      </div>

      <div className="ddsh">
        <h3 className="scores">Healthiness points: {recipe.healthScore}</h3>
      </div>

      <div className="ddsh">
        <h3 className="texts">Steps: </h3>
        <ul className="steps">
          {recipe.steps?.map((e) => {
            return <li key={e.number}>{e.step}</li>;
          })}
        </ul>
      </div>

      <Link to="/home">
        <button className="backButton">Go back to recipes</button>
      </Link>
    </div>
  );
};

export default RecipeDetail;
