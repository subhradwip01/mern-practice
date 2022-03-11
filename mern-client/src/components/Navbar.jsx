import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { AuthContext } from "../store/auth-context";

const Navbar = () => {
  const atx=useContext(AuthContext)
  const history=useHistory();
  const authList = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  const nauthList=[
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Login",
      path: "/login",
    },
    {
      name: "Signup",
      path: "/signup",
    },
  ]

  const navList=atx.isAuth ? authList :  nauthList
  const logouthandler = () => {
    atx.logout()
    history.push("/login")
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            MERN
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
            <ul className="navbar-nav ms-auto px-4">
              {navList.map((nav, i) => (
                
                <li key={i} className="nav-item">
                  <Link className="nav-link" to={nav.path}>
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
            {atx.isAuth && <button className="btn btn-danger" onClick={logouthandler}>Logout</button>}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
