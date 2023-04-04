import axios from "axios";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT = "LOGOUT";
export const REGISTER = "REGISTER";
export const REGISTER_START = "REGISTER_START";
export const REGISTER_ERROR = "REGISTER_ERROR";
export const LOADING = "LOADING";

export const register = (email, password) => {
  try {
    return async function (dispatch) {
      const response = await axios.post("http://localhost:3001/auth/register", {
        email,
        password,
      });
      console.log(response);
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
      const response = await axios.get(
        "http://localhost:3001/auth/login",
        {
          email,
          password,
        }
      )
      console.log(response.data);
      // if (response.data) {
        return dispatch({
          type: LOGIN_SUCCESS,
          payload: response.data,
        // });
      // } else {
      //   return dispatch({
      //     type: LOGIN_ERROR,
        });
      // }
    };
  } catch (err) {
    console.log(err);
  }
};
