//redux
import { CAR_REQUEST, CAR_SUCCESS, CAR_FAIL } from "./carTypes";

const initialState = {
  carData: [],
  loading: false,
  error: "",
};

export const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAR_REQUEST:
      return {
        ...state,
        loading: true,
        carData: [],
        error: "",
      };

    case CAR_SUCCESS:
      return {
        ...state,
        loading: false,
        carData: action.payload.carData,
        error: "",
      };

    case CAR_FAIL:
      return {
        ...state,
        loading: false,
        carData: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
