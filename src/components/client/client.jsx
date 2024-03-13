import React from "react";

//components
import Header from "../header/header";
import FormClient from "./formClient/formClient";

function Client() {
  return (
    <>
      <Header />
      <div className="container" style={{ maxWidth: "700px" }}>
        <h2 style={{ textAlign: "center" }}>Add Client</h2>
        <FormClient />
      </div>
    </>
  );
}

export default Client;
