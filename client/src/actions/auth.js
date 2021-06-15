import { AUTH } from "../constants/actionTypes";
import { signIn, signUp } from "../api/index";

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await signUp(formData);

    dispatch({ type: AUTH, data });

    history.push("/");
  } catch (error) {
    console.log(error.response.data.message);
    alert(error.response.data.message);
  }
};

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await signIn(formData);

    dispatch({ type: AUTH, data });

    history.push("/");
  } catch (error) {
    console.log(error.response.data);
    alert(error.response.data.message);
  }
};
