import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Saly10 from "../images/Saly-10.png";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../store/auth-context";

const Login = () => {
  const history = useHistory();
  const atx=useContext(AuthContext)
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  const inputHandler = (e) => {
    setFormData((prevData) => ({ ...prevData, [e.target.id]: e.target.value }));
  };

  const loginHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    const { email, password } = formData;
    try {
      const res = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: password,
          email: email,
        }),
      });

      if (res.status === 422) {
        const data = await res.json();
        console.log(data);
        throw new Error(data.message);
      }

      if (res.status !== 200 && res.status !== 201) {
        const data = await res.json();
        console.log(data);
        throw new Error(data.message);
      }
      const data = await res.json()
      setLoading(false);
      atx.login(data.token)
      window.alert("Login Successsfull");
      history.push("/");
    } catch (err) {
      console.log(err.message);
      setLoading(false)
      window.alert(err.message);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="container w-50 card p-5" style={{ borderRadius: "30px" }}>
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
                  value={formData.email}
                  onChange={inputHandler}
                />
              </div>
              <div class="form-group mt-3">
                <label for="password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={inputHandler}
                />
              </div>

              <button
                type="submit"
                class={`btn btn-primary my-3 ${loading ? "disabled" : ""}`}
                onClick={loginHandler}
              >
                {!loading && "Login"}
                {loading && "Loading..."}
              </button>
            </form>
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <img
              src={Saly10}
              alt="Logo"
              style={{ height: "300px", width: "300px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
