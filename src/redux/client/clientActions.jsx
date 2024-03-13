import axios from "axios";
import { toast } from "react-toastify";

//redux
import { CLEINT_FAIL, CLEINT_SUCCESS, CLEINT_REQUEST } from "./clientTypes";
import { statics } from "../dashboard/dashboardActions";

export const addClient = (formData) => async (dispatch) => {
  dispatch({ type: CLEINT_REQUEST });
  try {
    await axios.post(process.env.REACT_APP_API + "/addClient", formData);
    dispatch({ type: CLEINT_SUCCESS });
    dispatch(statics());
    toast.success("Add Client Successfully", {
      position: toast.POSITION,
      autoClose: 2000,
      theme: "colored",
    });
  } catch (error) {
    dispatch({ type: CLEINT_FAIL, payload: error.message });
    toast.error("Add Client Failed", {
      position: toast.POSITION,
      autoClose: 2000,
      theme: "colored",
    });
  }
};

export const getSponsors = () => async (dispatch) => {
  dispatch({ type: CLEINT_REQUEST });
  try {
    const res = await axios.get(process.env.REACT_APP_API + "/getSponsors");
    dispatch({ type: CLEINT_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: CLEINT_FAIL, payload: error.message });
  }
};

export const clientDetails = (id) => async (dispatch) => {
  dispatch({ type: CLEINT_REQUEST });
  try {
    const res = await axios.get(
      process.env.REACT_APP_API + "/clientDetails/" + id
    );
    dispatch({ type: CLEINT_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: CLEINT_FAIL, payload: error.message });
  }
};
