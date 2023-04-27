import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getRecipeById } from "../../redux/actions";
import s from "./RecipeDetail.module.css";
const RecipeDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const recipe = useSelector((state) => state.recipe);
  useEffect(() => {
    dispatch(getRecipeById(id));
  }, [dispatch, id]);
  console.log(recipe)
  return (
    <div key={recipe.id} className={s.detailContainer}>
      <div className={s.titleImgContainer}>
        <h1>{recipe.title}</h1>
        <img
          src={
            recipe.image
              ? recipe.image
              : "https://images.unsplash.com/photo-1635321593217-40050ad13c74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1748&q=80"
          }
          alt="Pic not found"
          className={s.img}
        />
        <div className={s.dietsContainer}>
          <h2>Diets:</h2>
          {recipe.diets?.map((diet) => {
            return <h2 key={diet}>{diet}</h2>;
          })}
        </div>
        <div>
          <h3>Healthiness points: </h3>
          <h3>{recipe.healthScore} </h3>
        </div>
      </div>

      <div className={s.summaryStepsContainer}>
        <div className={s.summaryContainer}>
          <h3>Summary: </h3>
          <p>{recipe.summary?.replace(/<[^>]*>/g, "")}</p>
        </div>
        <div className={s.stepsContainer}>
          <h3>Steps: </h3>
          <ul>
            {recipe.steps?.map((e) => {
              return (
                <li key={e.number}>
                  {e.number} - {e.step}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <Link to="/home" className={s.btn}>
        <button>Go back to recipes</button>
      </Link>
    </div>
  );
};

export default RecipeDetail;
