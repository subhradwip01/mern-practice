import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../store/auth-context";

const Home = () => {
  const history=useHistory()
  const atx=useContext(AuthContext)
  const [userData, setUserData] = useState(undefined);

  const getUserInfo = async () => {
    try {
      const res = await fetch("http://localhost:8000/getinfo", {
        headers: {
          Authorization: "Bearer " + atx.token,
        },
      });

      if (res.status !== 200 && res.status !== 201) {
        const data = await res.json();
        throw new Error(data.message);
      }

      const data = await res.json();
      setUserData(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, [atx.isAuth]);
  
   
   const notes = userData?.notes?.map(n=>{
     return {
       note:n.note,
       time:n.time ? new Date(parseInt(n.time)).toLocaleString().split(", ")[0] : "",
       date:n.time? new Date(parseInt(n.time)).toLocaleString().split(", ")[1] : ""
     }
   })
  console.log(notes)
  return (
    <div
      className="d-flex align-items-center justify-content-center text-center flex-column home-bg"
      style={{ height: "100vh" }}
    >
      <h1 style={{ fontWeight: "900", fontSize: "3rem" }}>
        Welcome to MERN Practice
      </h1>
      {userData && (
        <>
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
         
        </>
      )}
      {atx.isAuth && !notes && <p>No Notes is Here May be you can add === <Link to="/contact">Contact</Link> ✍ </p>}
      {notes && (
        <div className="container mt-5">
          <table>
            <tr>
              <th>No.</th>
              <th>Note</th>
              <th>Date of Creation</th>
              <th>Time of Creation</th>
            </tr>
            {notes.map((note,i)=>(
              <tr>
              <td>{i+1}</td>
              <td>{note.note}</td>
              <td>{note.time}</td>
              <td>{note.date}</td>
            </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default Home;
