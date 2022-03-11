import React, { useState, useEffect } from "react";

const Home = () => {
  const localToken = localStorage.getItem("token");
  const [token, setToken] = useState(localToken || null);
  const [userData,setUserData]=useState(undefined)
  useEffect(() => {
    if (localToken) {
      setToken(localToken);
    }
  }, [localToken]);

  console.log(token);

  const getUserInfo = async () => {
    try {
      const res = await fetch("http://localhost:8000/getinfo", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if(res.status!==200 && res.status!==201){
        const data = await res.json()
        throw new Error(data.message)
      }

      const data = await res.json();
      setUserData(data)
    } catch (err) {
      console.log(err.message)
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);
  const logouthandler=()=>{
    localStorage.removeItem("token")
    setToken(null)
    setUserData(undefined)
  }

  return (
    <div
      className="d-flex align-items-center justify-content-center text-center flex-column home-bg"
      style={{ height: "100vh" }}
    >
      <h1 style={{ fontWeight: "900", fontSize: "3rem" }}>
        Welcome to MERN Practice
      </h1>
      {userData && <>
      <h4 className="mt-5">User Info</h4>
      <div className="container w-50 card">
        <div className="row p-3" style={{ backgroundColor: "#80808047" }}>
          <div className="col">Name</div>
          <div className="col">{userData.name}</div>
        </div>
        <div className="row p-3">
          <div className="col">Email</div>
          <div className="col">{userData.email}</div>
        </div>
        <div className="row p-3" style={{ backgroundColor: "#80808047" }}>
          <div className="col">Number</div>
          <div className="col">{userData.mobile}</div>
        </div>
      </div>
      <button className="btn btn-primary mt-3" onClick={logouthandler}>Logout</button>
      </>}
    </div>
  );
};

export default Home;
