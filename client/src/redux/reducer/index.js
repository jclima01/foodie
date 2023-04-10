// Importa las action types acá

import {
  REGISTER,
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  GET_RECIPES,
  ADD_RECIPE,
  GET_DIETS
} from "../actions";

const initialState = {
  user: {},
  recipes: [],
  diets:[]
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER:
      return {
        ...state,
      };
    case LOGOUT:
      return {
        ...state,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("user", JSON.stringify(payload));
      return {
        ...state,
        user: payload,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        user: null,
      };
    case GET_RECIPES:
      return {
        ...state,
        recipes: [ ...payload],
      };
    case ADD_RECIPE:
      return{
        ...state,
        recipes: [...state.recipes]
      }
    case GET_DIETS:
      return{
        ...state,
        diets: [...state.diets, ...payload]
      }

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
