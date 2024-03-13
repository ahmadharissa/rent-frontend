import React from "react";
import { useSelector } from "react-redux";

function TransactionList() {
  const { transactions } = useSelector((state) => state.incomes);

  return (
    <div className="container">
      <h2 className="text-center mb-4">Transaction List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.trans_type === 0 ? "Outcome" : "Income"}</td>
              <td>{transaction.trans_amount}</td>
              <td>{transaction.trans_desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
