import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function FormClient(props) {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.users);

  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  return (
    <Fragment>
      <form>
        <div className="row">
          <div className="col-6">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={props.clientData?.name}
              disabled
            />
          </div>
          <div className="col-6">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              value={props.clientData?.address}
              disabled
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <label className="form-label">Phone</label>
            <input
              type="text"
              className="form-control"
              value={props.clientData?.phone}
              disabled
            />
          </div>
          <div className="col-4"></div>
        </div>

        <div className="row" style={{ marginTop: "2%" }}>
          {props.clientData?.sponsor_name ? (
            <Fragment>
              <div className="col-6">
                <label className="form-label">Sponsor name</label>
                <input
                  type="text"
                  className="form-control"
                  value={props.clientData?.sponsor_name}
                  disabled
                />
              </div>
              <div className="col-6">
                <label className="form-label">Sponsor mumber</label>
                <input
                  type="text"
                  className="form-control"
                  value={props.clientData?.sponsor_number}
                  disabled
                />
              </div>
            </Fragment>
          ) : (
            <Fragment></Fragment>
          )}
        </div>

        <div className="row">
          <div className="col-md-6">
            <label htmlFor="front_id_image" className="form-label">
              Front Id Image
            </label>
            <img
              src={
                process.env.REACT_APP_API +
                "/storage/" +
                props.clientData?.front_id_image
              }
              alt="front id image"
              className="img-thumbnail"
              style={{ height: "300px", width: "100%" }}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Back Id Image</label>
            <img
              src={
                process.env.REACT_APP_API +
                "/storage/" +
                props.clientData?.back_id_image
              }
              alt="back id image"
              className="img-thumbnail"
              style={{ height: "300px", width: "100%" }}
            />
          </div>
        </div>
      </form>
    </Fragment>
  );
}

export default FormClient;
