import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//css
import "./income.css";

//components
import Header from "../header/header";
import HeaderWithBackground from "./background/headerWithBackground";
import AddTransaction from "./addTransaction/addTransaction";
import TransactionList from "./transaction/transaction";

//redux
import { incomesAndExpenses } from "../../redux/income/incomeActions";

function Income() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.users);
  const { revenue, income, outcome } = useSelector((state) => state.incomes);

  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  useEffect(() => {
    dispatch(incomesAndExpenses());
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Income & Expenses</h1>
        <HeaderWithBackground />
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <table className="table center-table table-bordered">
              <tbody>
                <tr>
                  <th>Revenue</th>
                  <td>{revenue} $</td>
                </tr>
                <tr>
                  <th style={{ color: "green" }}>Income</th>
                  <td style={{ color: "green" }}>{income} $</td>
                </tr>
                <tr className="outcome-row">
                  <th style={{ color: "red" }}>Outcome</th>
                  <td style={{ color: "red" }}>{outcome} $</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <AddTransaction />
        <TransactionList />
      </div>
    </>
  );
}

export default Income;
