import React, { useState } from "react";
import { useDispatch } from "react-redux";

//redux
import { addCar } from "../../../redux/car/carActions";

function AddCar(props) {
  const dispatch = useDispatch();
  const [carInfo, setCarInfo] = useState({
    name: "",
    licence_plate_number: "",
    model: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const newValue = name === "image" ? files[0] : value;
    setCarInfo((prevInfo) => ({
      ...prevInfo,
      [name]: newValue,
    }));
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("name", carInfo.name);
    formData.append("licence_plate_number", carInfo.licence_plate_number);
    formData.append("model", carInfo.model);
    formData.append("image", carInfo.image);
    dispatch(addCar(formData));
    props.onClose();
  };

  return (
    <div
      className="modal"
      tabIndex="-1"
      role="dialog"
      style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Car</h5>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={carInfo.name}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="licence_plate_number" className="form-label">
                  License Plate Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="licence_plate_number"
                  name="licence_plate_number"
                  value={carInfo.licence_plate_number}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="model" className="form-label">
                  Model
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="model"
                  name="model"
                  value={carInfo.model}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  Image
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  name="image"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => props.onClose()}
                >
                  Close
                </button>
                <button type="Submit" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCar;
