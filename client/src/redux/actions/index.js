import axios from "axios";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT = "LOGOUT";
export const REGISTER = "REGISTER";
export const LOADING = "LOADING";
export const GET_RECIPES = "GET_RECIPES";
export const ADD_RECIPE = "ADD_RECIPE";
export const GET_DIETS = "GET_DIETS";
export const GET_RECIPES_BY_QUERY = "GET_RECIPES_BY_QUERY";
export const GET_RECIPES_BY_ID = "GET_RECIPES_BY_ID"

export const register = (email, password) => {
  try {
    return async function (dispatch) {
      const response = await axios.post("http://localhost:3001/auth/register", {
        email,
        password,
      });
      return dispatch({
        type: REGISTER,
        payload: response.data,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    console.log(err);
  }
};

export const logout = () => {
  try {
    return async function (dispatch) {
      return dispatch({
        type: LOGOUT,
      });
    };
  // eslint-disable-next-line no-unreachable
  } catch (err) {
    console.log(err);
  }
};

export const login = (email, password) => {
  try {
    return async function (dispatch) {
      const response = await axios.post("http://localhost:3001/auth/login", {
        email,
        password,
      });
      return dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    console.log(err);
  }
};
export const getRecipes = () => {
  try {
    return async function (dispatch) {
      const response = await axios.get("http://localhost:3001/recipes");
      return dispatch({
        type: GET_RECIPES,
        payload: response.data,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    console.log(err);
  }
};
export const addRecipe = (
  title,
  image,
  summary,
  instructions,
  healthScore,
  diets
) => {
  try {
    return async function (dispatch) {
      await axios.post("http://localhost:3001/recipes", {
        title,
        image,
        summary,
        instructions,
        healthScore,
        diets,
      });
      return dispatch({
        type: ADD_RECIPE,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (err) {
    console.log(err);
  }
};
export const getDiets = () => {
  try {
    return async function (dispatch) {
      const { data } = await axios.get("http://localhost:3001/diets");
      return dispatch({
        type: GET_DIETS,
        payload: data,
      });
    };
    // eslint-disable-next-line
  } catch (err) {
    console.log(err);
  }
};
export const getRecipesByQuery = (searchKey) => {
  try {
    return async function (dispatch) {
      const {data} = await axios.get(
        `http://localhost:3001/recipes?query=${searchKey}`
      );
      return dispatch({
        type: GET_RECIPES_BY_QUERY,
        payload: data,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (error) {
    console.log(error);
  }
};

export const getRecipeById = (id) => {
  try {
    return async function (dispatch) {
      const { data } = await axios.get(`http://localhost:3001/recipes/${id}`);
      return dispatch({
        type: GET_RECIPES_BY_ID,
        payload: data
      })
    };
    // eslint-disable-next-line no-unreachable
  } catch (error) {
    console.log(error)
  }
};
