import React, { useState, useEffect } from "react";
import { BiPhoneCall, BiMailSend, BiMap, BiWindows } from "react-icons/bi";
import { useHistory } from "react-router-dom";

const Contact = () => {
  const localToken = localStorage.getItem("token");
  const history = useHistory();
  const [token, setToken] = useState(localToken || null);
  const [userData, setUserData] = useState(undefined);
  const [message, setMessage] = useState("");
  const [loding, setIsloading] = useState(false);
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
      
      if (res.status !== 200 && res.status !== 201) {
        const data = await res.json();
        throw new Error(data.message);
      }

      const data = await res.json();
      console.log(data);
      setUserData(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const messageSender = async (e) => {
    e.preventDefault();
    setIsloading(true);
    console.log(userData.email)
    try {
      const res = await fetch("http://localhost:8000/sendmessage", {
        method: "POST",
        body: JSON.stringify({
          message: message
        }),
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log(res.status)

      if (res.status !== 200 && res.status !== 201) {
        const data = await res.json();
        throw new Error(data.message);
      }

      const data = await res.json();
      console.log(data);
      setIsloading(false);
      window.alert("Notes added Succesfully")
      setMessage("")
    } catch (err) {
      setIsloading(false);
      window.alert(err.message);
    }
  };

  return (
    <>
      <div className="container mt-5" style={{ height: "100%" }}>
        {!userData && (
          <button
            className="btn btn-primary"
            onClick={() => {
              history.push("/login");
            }}
          >
            Login Now!
          </button>
        )}
        {userData && (
          <>
            <div className="row mb-5">
              <div className="col">
                <div
                  className="card px-4 py-3 d-flex flex-row align-items-center mb-3"
                  style={{ borderRadius: "30px" }}
                >
                  <div className="me-4">
                    <BiPhoneCall size={40} />
                  </div>

                  <div>
                    <h3>Phone Number</h3>
                    <p>{userData?.mobile}</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card px-4 py-3 d-flex flex-row align-items-center mb-3"
                  style={{ borderRadius: "30px" }}
                >
                  <div className="me-4">
                    <BiMailSend size={40} />
                  </div>
                  <div>
                    <h3>Emial</h3>
                    <p>{userData?.email}</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card px-4 py-3 d-flex flex-row align-items-center mb-3"
                  style={{ borderRadius: "30px" }}
                >
                  <div className="me-4">
                    <BiMap size={40} />
                  </div>
                  <div>
                    <h3>Adddress</h3>
                    <p>{userData?.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="row justify-content-center align-items-center"
              style={{ height: "100%", paddingTop: "100px" }}
            >
              <div className="card w-75 p-5" style={{ borderRadius: "30px" }}>
                <h1 className="mb-3">Add Notes</h1>
                <form>
                  <div className="row">
                    <textarea
                      class="form-control"
                      id="messege"
                      rows="10"
                      placeholder="Add your Notes"
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                    ></textarea>
                  </div>
                </form>
                <button
                  type="submit"
                  class={`btn btn-primary my-3 ${loding ? "disabled" : ""}`}
                  onClick={messageSender}
                >
                  {!loding && "Add Notes"}
                  {loding && "Loading..."}
                </button>
              </div>
            </div>

            <div></div>
          </>
        )}{" "}
      </div>
    </>
  );
};

export default Contact;
