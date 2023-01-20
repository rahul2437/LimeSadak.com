//Write the ActionCreator functions here
import axios from "axios";
import * as types from "./actionTypes";
const signup = (payload) => (dispatch) => {
  const signupURL = `https://general-icicle-9828.vercel.app/user/signup`;
  dispatch({ type: types.LOGIN_REQUEST });
  try {
    axios
      .post(signupURL, payload)
      .then((res) => {
        dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.user });
      })
      .catch((err) => {
        dispatch({ type: types.LOGIN_FAILURE, error: err });
      });
  } catch (error) {
    dispatch({ type: types.LOGIN_FAILURE });
  }
};
const signin = (payload) => (dispatch) => {
  const signinURL = `https://general-icicle-9828.vercel.app/user/signin`;
  dispatch({ type: types.LOGIN_REQUEST });
  try {
    axios
      .post(signinURL, payload)
      .then((res) => {
        dispatch({
          type: types.LOGIN_SUCCESS,
          payload: { user: res.data.user, token: res.data.token },
        });
      })
      .catch((err) => {
        dispatch({ type: types.LOGIN_FAILURE, error: err });
      });
  } catch (error) {
    dispatch({ type: types.LOGIN_FAILURE });
  }
};
const signout = () => (dispatch) => {
  dispatch({ type: types.LOGOUT_REQUEST });
};
export { signup, signin, signout };
