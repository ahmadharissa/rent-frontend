import axios from "axios";
import { toast } from "react-toastify";

//redux
import { CAR_REQUEST, CAR_SUCCESS, CAR_FAIL } from "./carTypes";

export const showCars = () => async (dispatch) => {
  dispatch({ type: CAR_REQUEST });
  try {
    const res = await axios.get(process.env.REACT_APP_API + "/showCars");
    dispatch({ type: CAR_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: CAR_FAIL, payload: error.message });
  }
};

export const addCar = (formData) => async (dispatch) => {
  dispatch({ type: CAR_REQUEST });
  try {
    await axios.post(process.env.REACT_APP_API + "/addCar", formData);
    dispatch(showCars());
    toast.success("Add Car Successfully", {
      position: toast.POSITION,
      autoClose: 2000,
      theme: "colored",
    });
  } catch (error) {
    dispatch({ type: CAR_FAIL, payload: error.message });
    toast.error("Add Car Failed", {
      position: toast.POSITION,
      autoClose: 2000,
      theme: "colored",
    });
  }
};

export const newRent = (formData) => async (dispatch) => {
  dispatch({ type: CAR_REQUEST });
  try {
    await axios.post(process.env.REACT_APP_API + "/newRent", formData);
    dispatch({ type: CAR_SUCCESS });
    toast.success("Car Rent Successfully", {
      position: toast.POSITION,
      autoClose: 2000,
      theme: "colored",
    });
  } catch (error) {
    dispatch({ type: CAR_FAIL, payload: error.message });
    toast.error("Car Rent Failed", {
      position: toast.POSITION,
      autoClose: 2000,
      theme: "colored",
    });
  }
};
