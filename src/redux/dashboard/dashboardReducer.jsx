//redux
import {
  DASHBOARD_REQUEST,
  DASHBOARD_FAIL,
  DASHBOARD_SUCCESS,
} from "./dashboardTypes";

const initialState = {
  loading: false,
  clientsCount: 0,
  carsCount: 0,
  expenses: 0,
  income: 0,
  clients: [],
  error: "",
};

export const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case DASHBOARD_REQUEST:
      return {
        ...state,
        loading: true,
        clientsCount: 0,
        carsCount: 0,
        expenses: 0,
        income: 0,
        clients: [],
        error: "",
      };

    case DASHBOARD_SUCCESS:
      return {
        ...state,
        loading: false,
        clientsCount: action.payload.clientsCount,
        carsCount: action.payload.carsCount,
        expenses: action.payload.expenses,
        income: action.payload.income,
        clients: action.payload.clients,
        error: "",
      };

    case DASHBOARD_FAIL:
      return {
        ...state,
        loading: false,
        clientsCount: 0,
        carsCount: 0,
        expenses: 0,
        income: 0,
        clients: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
