//redux
import { LOGIN_REQUEST, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "./userTypes";

const initialState = {
  isAuthenticated: false,
  loading: false,
  errorLogin: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
        errorLogin: "",
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        errorLogin: "",
      };

    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        errorLogin: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        errorLogin: "",
      };

    default:
      return state;
  }
};
