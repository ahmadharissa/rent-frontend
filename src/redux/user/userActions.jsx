import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//redux
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./userTypes";

//utils
import setAuthToken from "../../utils/setAuthToken";

export const login = (data) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const res = await axios.post(
      process.env.REACT_APP_API + "/api/auth/login",
      data
    );
    localStorage.setItem("token", res.data.token);
    dispatch({ type: LOGIN_SUCCESS });
    toast.success("User Logged Successfully", {
      position: toast.POSITION,
      autoClose: 2000,
      theme: "colored",
    });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.message });
    toast.error("User Login Failed", {
      position: toast.POSITION,
      autoClose: 2000,
      theme: "colored",
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  setAuthToken(false);
  dispatch({ type: LOGOUT });
  toast.success("User Logged Out Successfully", {
    position: toast.POSITION,
    autoClose: 2000,
    theme: "colored",
  });
  window.location.href = "/";
};
