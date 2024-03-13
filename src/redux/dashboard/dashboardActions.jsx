import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

//redux
import {
  DASHBOARD_REQUEST,
  DASHBOARD_FAIL,
  DASHBOARD_SUCCESS,
} from "./dashboardTypes";

export const statics = () => async (dispatch) => {
  dispatch({ type: DASHBOARD_REQUEST });
  try {
    const res = await axios.get(process.env.REACT_APP_API + "/");
    dispatch({ type: DASHBOARD_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: DASHBOARD_FAIL, payload: error.message });
  }
};
