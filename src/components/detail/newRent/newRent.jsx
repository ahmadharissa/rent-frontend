import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//redux
import { newRent, showCars } from "../../../redux/car/carActions";

function NewRent(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.users);
  const { carData } = useSelector((state) => state.cars);
  const [clientInfo, setClientInfo] = useState({
    id: props.id,
    car_id: "",
    start_date: "",
    end_date: "",
    video: "",
  });

  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    dispatch(showCars());
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const newValue = name === "video" ? files[0] : value;
    setClientInfo((prevInfo) => ({
      ...prevInfo,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", clientInfo.id);
    formData.append("car_id", clientInfo.car_id);
    formData.append("start_date", clientInfo.start_date);
    formData.append("end_date", clientInfo.end_date);
    formData.append("video", clientInfo.video);
    dispatch(newRent(formData));
    navigate("/Income");
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit} className="container mt-3">
        <div className="form-group">
          <label htmlFor="car_id">Car:</label>
          <select
            className="form-control"
            id="car_id"
            name="car_id"
            required
            value={clientInfo.car_id}
            onChange={handleChange}
          >
            {carData.map((car) => (
              <option key={car.id} value={car.id} disabled={car.isRented === 1}>
                {car.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="start_date">Start Date:</label>
          <input
            type="datetime-local"
            id="start_date"
            name="start_date"
            value={clientInfo.start_date}
            required
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="end_date">End Date:</label>
          <input
            type="datetime-local"
            id="end_date"
            name="end_date"
            value={clientInfo.end_date}
            required
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="video">Video:</label>
          <input
            type="file"
            id="video"
            name="video"
            required
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group text-center">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "2%" }}
          >
            Rent Car
          </button>
        </div>
      </form>
    </Fragment>
  );
}

export default NewRent;
