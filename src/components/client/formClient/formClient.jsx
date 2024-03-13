import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//redux
import { addClient, getSponsors } from "../../../redux/client/clientActions";

function FormClient(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.users);
  const { sponserData } = useSelector((state) => state.clients);
  const [clientInfo, setClientInfo] = useState({
    name: "",
    address: "",
    phone: "",
    front_id_image: "",
    back_id_image: "",
    sponsor_status: "new",
    sponsor_id: "",
    sponsor_name: "",
    sponsor_number: "",
  });

  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    dispatch(getSponsors());
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const newValue =
      name === "back_id_image" || name === "front_id_image" ? files[0] : value;
    setClientInfo((prevInfo) => ({
      ...prevInfo,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", clientInfo.name);
    formData.append("address", clientInfo.address);
    formData.append("phone", clientInfo.phone);
    formData.append("front_id_image", clientInfo.front_id_image);
    formData.append("back_id_image", clientInfo.back_id_image);
    formData.append("sponsor_status", clientInfo.sponsor_status);
    if (clientInfo.sponsor_status === "existing") {
      formData.append("sponsor_id", clientInfo.sponsor_id);
    } else if (clientInfo.sponsor_status === "new") {
      formData.append("sponsor_name", clientInfo.sponsor_name);
      formData.append("sponsor_number", clientInfo.sponsor_number);
    }
    dispatch(addClient(formData));
    navigate("/Income");
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Client Name"
              value={clientInfo.name}
              name="name"
              required
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Address"
              value={clientInfo.address}
              name="address"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <input
              type="text"
              className="form-control"
              placeholder="Phone"
              value={clientInfo.phone}
              name="phone"
              required
              onChange={handleChange}
            />
          </div>
          <div className="col-4"></div>
        </div>

        <div className="row">
          <div className="col-4">
            <label htmlFor="front_id_image" className="form-label">
              Front Id Image
            </label>
            <input
              type="file"
              className="form-control"
              id="front_id_image"
              name="front_id_image"
              required
              onChange={handleChange}
            />
          </div>

          <div className="col-4">
            <label htmlFor="sponsor_status" className="form-label">
              Sponsor Status
            </label>
            <select
              className="form-control"
              id="sponsor_status"
              name="sponsor_status"
              value={clientInfo.sponsor_status}
              required
              onChange={handleChange}
            >
              <option value="new">New</option>
              <option value="exists">Exists </option>
              <option value="without">Without</option>
            </select>
          </div>

          <div className="col-4">
            <label htmlFor="back_id_image" className="form-label">
              Back Id Image
            </label>
            <input
              type="file"
              className="form-control"
              id="back_id_image"
              name="back_id_image"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row" style={{ marginTop: "2%" }}>
          {clientInfo.sponsor_status === "exists" ? (
            <Fragment>
              <div className="col-4"></div>
              <div className="col-4" style={{ marginBottom: "2%" }}>
                <select
                  className="form-control"
                  id="sponsor_id"
                  name="sponsor_id"
                  value={clientInfo.sponsor_id}
                  required
                  onChange={handleChange}
                >
                  {sponserData.map((sponsor) => (
                    <option key={sponsor.id} value={sponsor.id}>
                      {sponsor.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-4"></div>
            </Fragment>
          ) : clientInfo.sponsor_status === "without" ? (
            <Fragment></Fragment>
          ) : (
            <Fragment>
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Sponsor Name"
                  name="sponsor_name"
                  value={clientInfo.sponsor_name}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Sponsor Number"
                  name="sponsor_number"
                  value={clientInfo.sponsor_number}
                  required
                  onChange={handleChange}
                />
              </div>
            </Fragment>
          )}
        </div>
        <center>
          <button type="submit" className="btn btn-primary">
            Save Client
          </button>
        </center>
      </form>
    </Fragment>
  );
}

export default FormClient;
