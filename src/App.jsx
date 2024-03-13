import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

//components
import Dashboard from "./components/dashboard/dashboard";
import Login from "./components/auth/login/login";
import Income from "./components/income/income";
import Car from "./components/car/car";
import Detail from "./components/detail/detail";
import Client from "./components/client/client";

//utils
import isAuth from "./utils/isAuth";

//css
import "./App.css";

function App() {
  const dispatch = useDispatch();

  isAuth(dispatch);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/Login" exact element={<Login />} />
        <Route path="/Dashboard" exact element={<Dashboard />} />
        <Route path="/Income" exact element={<Income />} />
        <Route path="/Car" exact element={<Car />} />
        <Route path="/Detail/:id" exact element={<Detail />} />
        <Route path="/Client" exact element={<Client />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
