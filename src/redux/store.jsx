import { configureStore } from "@reduxjs/toolkit";

//redux
import { userReducer } from "./user/userReducer";
import { dashboardReducer } from "./dashboard/dashboardReducer";
import { incomeReducer } from "./income/incomeReducer";
import { carReducer } from "./car/carReducer";
import { clientReducer } from "./client/clientReducer";

const store = configureStore({
  reducer: {
    users: userReducer,
    dashboard: dashboardReducer,
    incomes: incomeReducer,
    cars: carReducer,
    clients: clientReducer,
  },
});

export default store;
