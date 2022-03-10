import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Saly10 from "../images/Saly-10.png"
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
    className="d-flex justify-content-center align-items-center"
    style={{ height: "100vh" }}
  >
    <div className="container w-50 card p-5" style={{"borderRadius":"30px"}}>
    <div className="row">
      <div className="col-8">
        <h1 className="px-0 mb-5">Sign Up</h1>
      <form className="justify-items-center">
      <div class="form-group mt-3">
        <label for="email">Email Id</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Email"
        />
      </div>
      <div class="form-group mt-3">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="c-password"
          placeholder="Password"
        />
      </div>
      
      
      <button type="submit" class="btn btn-primary mt-3">
        Login
      </button>
      
    </form>
      </div>
      <div className="col-4 d-flex justify-content-center align-items-center">
          <img src={Saly10} alt="Logo" style={{"height":"300px","width":"300px"}}/>
      </div>
    </div>
    </div>
    
  </div>
  );
};

export default Login;
