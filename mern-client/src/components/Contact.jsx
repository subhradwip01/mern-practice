import React from "react";
import { BiPhoneCall, BiMailSend, BiMap } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <div className="container mt-5" style={{"height":"100%"}}>
        <div className="row mb-5">
          <div className="col">
            <div className="card px-4 py-3 d-flex flex-row align-items-center mb-3" style={{"borderRadius":"30px"}}>
              <div className="me-4">

              <BiPhoneCall size={40}/>
              </div>
              
              <div>
              <h3>Phone Number</h3>
              <p>3898719847</p>
              </div>
            </div>
            </div>
            <div className="col">
            <div className="card px-4 py-3 d-flex flex-row align-items-center mb-3" style={{"borderRadius":"30px"}}>
              <div className="me-4">
              <BiMailSend size={40}/>
              </div>
              <div>
              <h3>Emial</h3>
              <p>test@gmail.com</p>
              </div>
            </div>
            </div>
            <div className="col">
            <div className="card px-4 py-3 d-flex flex-row align-items-center mb-3" style={{"borderRadius":"30px"}}>
              <div className="me-4">
              <BiMap size={40}/>
              </div>
              <div>
              <h3>Adddress</h3>
              <p>Test</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center" style={{"height":"100%","paddingTop":"100px"}}>
          <div className="card w-75 p-5" style={{"borderRadius":"30px"}}>
            <h1 className="mb-3">Get in Touch</h1>
            <form>
              <div className="row mb-4">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First name"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div className="row">
                <textarea
                  class="form-control"
                  id="messege"
                  rows="10"
                  placeholder="Message"
                ></textarea>
              </div>
            </form>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
};

export default Contact;
