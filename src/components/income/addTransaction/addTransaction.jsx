import React, { useState } from "react";
import { useDispatch } from "react-redux";

//redux
import { addTransaction } from "../../../redux/income/incomeActions";

function AddTransaction() {
  const dispatch = useDispatch();
  const [type, setType] = useState("1");
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTransaction(type, amount, desc));
    // Reset form fields
    setType("1");
    setAmount("");
    setDesc("");
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Add Transaction</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="type" className="form-label">
                Type:
              </label>
              <select
                id="type"
                className="form-select"
                value={type}
                required
                onChange={(e) => setType(e.target.value)}
              >
                <option value="1">Income</option>
                <option value="0">Outcome</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="amount" className="form-label">
                Amount:
              </label>
              <div className="input-group">
                <input
                  id="amount"
                  type="number"
                  className="form-control"
                  value={amount}
                  required
                  onChange={(e) => setAmount(e.target.value)}
                />
                <span className="input-group-text">
                  <i className="bi bi-currency-dollar"></i>
                </span>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="desc" className="form-label">
                Description:
              </label>
              <input
                id="desc"
                type="text"
                className="form-control"
                value={desc}
                required
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddTransaction;
