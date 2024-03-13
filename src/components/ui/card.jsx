import React from "react";

function Card({ icon, title, children }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2%",
      }}
    >
      <div className="card" style={{ width: "20rem" }}>
        <div className="card-body">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>{title}</div>
            <div>
              <i className={icon} style={{ color: "blue" }}></i>
            </div>
          </div>
          <div style={{ color: "blue" }}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
