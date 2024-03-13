import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//components
import Header from "../header/header";
import AddCar from "./addCadr/addCar";

//redux
import { showCars } from "../../redux/car/carActions";

function Car() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.users);
  const { carData } = useSelector((state) => state.cars);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  useEffect(() => {
    dispatch(showCars());
  }, []);

  const handleAddButtonClick = () => {
    setShowAddForm(true);
  };

  const handleAddFormClose = () => {
    setShowAddForm(false);
  };

  return (
    <>
      <Header />
      <center style={{ marginTop: "2%" }}>
        <button
          className="btn btn-info"
          style={{ width: "450px" }}
          onClick={handleAddButtonClick}
        >
          <i className="bi bi-plus-circle"> Add car</i>
        </button>
      </center>
      <center style={{ marginTop: "2%" }}>
        {carData.map((car) => (
          <div key={car.id} className="card mb-3" style={{ width: "450px" }}>
            <img
              src={process.env.REACT_APP_API + "/storage/" + car.image}
              className="card-img-top"
              alt="car"
            />
            <div className="card-body text-center">
              <h5 className="card-title">{car.name}</h5>
              <div className="row">
                <div className="col">
                  <p className="card-text text-start">Model: {car.model}</p>
                </div>
                <div className="col">
                  <p className="card-text text-end">
                    License Plate: {car.licence_plate_number}
                  </p>
                </div>
              </div>
              <p
                className="card-text"
                style={{ color: car.isRented ? "red" : "green" }}
              >
                {car.isRented ? "Rented" : "Not Rented"}
              </p>
              <button className="btn btn-info ">
                <i className="bi bi-info-circle"> More</i>
              </button>
            </div>
          </div>
        ))}
      </center>
      {showAddForm && <AddCar onClose={handleAddFormClose} />}
    </>
  );
}

export default Car;
