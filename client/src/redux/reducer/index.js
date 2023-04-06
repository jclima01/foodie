// Importa las action types acá

import { REGISTER, LOGOUT,LOGIN_SUCCESS,LOGIN_ERROR } from "../actions";

const initialState = {
  user:{},
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
   

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
