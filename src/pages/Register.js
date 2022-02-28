import React, { useState } from "react";
import { Link } from "react-router-dom";

import ecommerceGif from "../images/e-commerce.gif";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCpassword] = useState("");

  return (
    <div className="register-parent">
      <div className="register-top"></div>
      <div className="row justify-content-center">
        <div className="col-md-5">
          <img src={ecommerceGif} />
        </div>
        <div className="col-md-4 z1">
          <div className="register-form">
            <h2>Registration</h2>
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

            <input
              type="password"
              className="form-control"
              placeholder="Conform password"
              value={email}
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
            />

            <button className="my-3">Register Now</button>

            <hr />

            <Link to="/login"> Click Here To Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
