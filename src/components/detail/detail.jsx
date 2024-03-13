import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

//components
import Header from "../header/header";
import FormClient from "./formClieant/formClient";
import NewRent from "./newRent/newRent";

//redux
import { clientDetails } from "../../redux/client/clientActions";

function Detail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { clientData, loading } = useSelector((state) => state.clients);
  const { isAuthenticated } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(clientDetails(id));
  }, []);

  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  return (
    <>
      <Header />
      <div className="container" style={{ maxWidth: "700px" }}>
        <h2 style={{ textAlign: "center" }}>Client</h2>
        {loading ? <p>Loading...</p> : <FormClient clientData={clientData} />}
        {clientData?.hasRented ? null : <NewRent id={id} />}
      </div>
    </>
  );
}

export default Detail;
