import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//redux
import { login } from "../../../redux/user/userActions";

//utils
import carRent from "../../../assets/carRent.jpg";

//css
import "./login.css";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { responseLogin, errorLogin, isAuthenticated } = useSelector(
    (state) => state.users
  );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    const data = { username, password };
    dispatch(login(data));
  };

  const handelChangeUsername = (e) => {
    e.preventDefault();
    setUsername(e.target.value.trim());
  };

  const handelChangePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/Dashboard");
  }, [isAuthenticated]);

  return (
    <div className="cont">
      <form onSubmit={handelSubmit}>
        <div className="imgcontainer">
          <img src={carRent} alt="Avatar" className="avatar" />
        </div>
        <label htmlFor="Username">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="Username"
          required
          onChange={handelChangeUsername}
        />
        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          required
          onChange={handelChangePassword}
        />
        <div style={{ textAlign: "center" }}>
          <button className="btn btn-primary login" type="submit">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
