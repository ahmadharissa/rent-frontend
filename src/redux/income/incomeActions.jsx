import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//redux
import { INCOME_REQUEST, INCOME_SUCCESS, INCOME_FAIL } from "./incomeTypes";

export const incomesAndExpenses = () => async (dispatch) => {
  dispatch({ type: INCOME_REQUEST });
  try {
    const res = await axios.get(process.env.REACT_APP_API + "/expenses");
    dispatch({ type: INCOME_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: INCOME_FAIL, payload: error.message });
  }
};

export const addTransaction = (type, amount, desc) => async (dispatch) => {
  dispatch({ type: INCOME_REQUEST });
  try {
    await axios.post(process.env.REACT_APP_API + "/addTransaction", {
      type: type,
      amount: amount,
      desc: desc,
    });
    dispatch(incomesAndExpenses());
    toast.success("Transaction Added Successfully", {
      position: toast.POSITION,
      autoClose: 2000,
      theme: "colored",
    });
  } catch (error) {
    dispatch({ type: INCOME_FAIL, payload: error.message });
    toast.error("Transaction Add Failed", {
      position: toast.POSITION,
      autoClose: 2000,
      theme: "colored",
    });
  }
};
