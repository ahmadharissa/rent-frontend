import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//redux
import { logout } from "../../redux/user/userActions";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.users);

  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/Dashboard">
          <i className="bi bi-tools" style={{ color: "blue" }}></i>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="navbar-brand" to="/Dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand" to="/Client">
                Client
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand" to="/Car">
                Car
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand" to="/Income">
                Income & Expenses
              </Link>
            </li>
          </ul>
          <button
            className="btn btn-outline-danger"
            style={{ marginLeft: "1%" }}
            onClick={() => dispatch(logout())}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
