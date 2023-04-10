import axios from "axios";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT = "LOGOUT";
export const REGISTER = "REGISTER";
export const LOADING = "LOADING";
export const GET_RECIPES = "GET_RECIPES";
export const ADD_RECIPE = "ADD_RECIPE";
export const GET_DIETS = "GET_DIETS";
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
  } catch (err) {
    console.log(err);
  }
};
export const addRecipe = (payload) => {
  try {
    return async function (dispatch) {
      const response = await axios.post(
        "http://localhost:3001/recipes",
        payload
      );
      return dispatch({
        type: ADD_RECIPE,
        payload: response.data,
      });
    };
  } catch (err) {
    console.log(err);
  }
};
export const getDiets = () => {
  try {
    return async function (dispatch) {
      const response = await axios.get(
        "http://localhost:3001/diets"
      );
      return dispatch({
        type: GET_DIETS,
        payload: response.data,
      });
    };
  } catch (err) {
    console.log(err);
  }
};
