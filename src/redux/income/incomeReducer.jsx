//redux
import { INCOME_REQUEST, INCOME_FAIL, INCOME_SUCCESS } from "./incomeTypes";

const initialState = {
  loading: false,
  revenue: 0,
  income: 0,
  outcome: 0,
  transactions: [],
  error: "",
};

export const incomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCOME_REQUEST:
      return {
        ...state,
        loading: true,
        revenue: 0,
        income: 0,
        outcome: 0,
        transactions: [],
        error: "",
      };

    case INCOME_SUCCESS:
      return {
        ...state,
        loading: false,
        revenue: action.payload.revenue,
        income: action.payload.income,
        outcome: action.payload.outcome,
        transactions: action.payload.transactions,
        error: "",
      };

    case INCOME_FAIL:
      return {
        ...state,
        loading: false,
        revenue: 0,
        income: 0,
        outcome: 0,
        transactions: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
