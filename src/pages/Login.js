import React, { useState } from "react";
import { Link } from "react-router-dom";
import ecommercegif from "../images/ecommerce.gif";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCpassword] = useState("");

  return (
    <div className="login-parent">
      <div className="row justify-content-center">

      <div className="col-md-4 z1">
          <div className="login-form">
            <h2>Login</h2>
            <hr />

            <input
              type="email"
              className="form-control"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={email}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <button className="my-3">Login Now</button>
          </div>

          <hr />

          <Link to="/register"> Click Here To Register</Link>
        </div>

        <div className="col-md-5">
 
          <img src={ecommercegif} width={600} height={500} />
        </div>

      </div>
      <div className="login-bottom"></div>
    </div>
  );
}

export default Login;
