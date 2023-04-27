import React, { useEffect, useState } from "react";
// import { validation } from "./validations.js";
import s from "./addrecipe.module.css";
import { addRecipe, getDiets } from "../../redux/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddRecipe = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const diets = useSelector((state) => state.diets);
  const [counter, setCounter] = useState(1);
  const [stepsInput, setStepsInput] = useState("");
  const [payload, setPayload] = useState({
    title: "",
    image: "",
    summary: "",
    healthScore: "",
    steps: [],
    diets: [],
  });
  console.log(payload);
  console.log(stepsInput);

  useEffect(() => {
    dispatch(getDiets());
  }, []);

  const handleInputChange = (e) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };
  const handleStepInputChange = (e) => {
    setStepsInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addRecipe(
        payload.title,
        payload.image,
        payload.summary,
        payload.steps,
        payload.healthScore,
        payload.diets
      )
    );
    navigate("/home");
  };
  const number = 1;
  const addStep = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
    setPayload({
      ...payload,
      steps: [...payload.steps, { number: counter, step: stepsInput }],
    });

    setStepsInput("");
    // setPayload({
    //   ...payload,
    //   stepsInput: "",
    // });
  };
  console.log(payload.steps);

  return (
    <div className={s.addRecipeContainer}>
      <h1>Crea tu nueva receta:</h1>
      <form onSubmit={handleSubmit}>
        <div className={s.inputs}>
          <label text="title" htmlFor="title">
            Título:
          </label>
          <input
            name="title"
            id="title"
            placeholder="Título de la receta"
            type="text"
            value={payload.title}
            onChange={handleInputChange}
          />
          <label htmlFor="image">Imagen:</label>
          <input
            name="image"
            id="image"
            placeholder="Ingresa la URL de la imagen"
            type="text"
            value={payload.image}
            onChange={handleInputChange}
          />

          <label text="summary" htmlFor="summary">
            Resumen:
          </label>
          <input
            name="summary"
            id="summary"
            placeholder="Ingresa un resumen breve de la receta"
            type="text"
            value={payload.summary}
            onChange={handleInputChange}
          />
          <label text="healthScore" htmlFor="healthScore">
            Saludable (puntaje):
          </label>
          <input
            name="healthScore"
            id="healthScore"
            placeholder="Ingresa un puntaje de salud para la receta"
            type="text"
            value={payload.healthScore}
            onChange={handleInputChange}
          />
          <label text="steps" htmlFor="steps">
            Steps:
          </label>
          <div>
            <input
              name="stepsInput"
              id="stepsInput"
              placeholder="Ingresa las steps de la receta"
              type="text"
              value={stepsInput}
              onChange={handleStepInputChange}
            />
            <button onClick={addStep}>+</button>
          </div>
        </div>
        <div className={s.checkboxs}>
          {diets?.map((diet) => {
            return (
              <div key={diet.id}>
                <input
                  type="checkbox"
                  name={diet.name}
                  id={diet.id}
                  checked={payload.diets.some((d) => d.id === diet.id)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setPayload({
                        ...payload,
                        diets: [
                          ...payload.diets,
                          { id: diet.id, name: diet.name },
                        ],
                      });
                    } else {
                      setPayload({
                        ...payload,
                        diets: payload.diets.filter((d) => d.id !== diet.id),
                      });
                    }
                  }}
                />
                <label htmlFor={diet.name}>{diet.name}</label>
              </div>
            );
          })}
        </div>

        <div></div>
        <button className={s.btn} type="submit">
          Crear Receta
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
