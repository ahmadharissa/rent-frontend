//utils
import setAuthToken from "./setAuthToken";

//redux
import { LOGIN_SUCCESS } from "../redux/user/userTypes";

const isAuth = async (dispatch) => {
  const token = localStorage.token;

  if (token) {
    setAuthToken(token);
    dispatch({ type: LOGIN_SUCCESS });
  }

  return false;
};

export default isAuth;
