//redux
import { CLEINT_FAIL, CLEINT_REQUEST, CLEINT_SUCCESS } from "./clientTypes";

const initialState = {
  loading: false,
  sponserData: [],
  clientData: {},
  error: "",
};

export const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEINT_REQUEST:
      return {
        ...state,
        loading: true,
        sponserData: [],
        clientData: {},
        error: "",
      };

    case CLEINT_SUCCESS:
      return {
        ...state,
        loading: false,
        sponserData: action.payload.sponsors,
        clientData: action.payload.clientDetails,
        error: "",
      };

    case CLEINT_FAIL:
      return {
        ...state,
        loading: false,
        sponserData: [],
        clientData: {},
        error: action.payload,
      };

    default:
      return state;
  }
};
