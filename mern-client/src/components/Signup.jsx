import React , {useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Saly44 from "../images/Saly-44.png";
import { Link,useHistory } from "react-router-dom";
const Signup = () => {
  const history = useHistory();
  const [formData,setFormData]=useState({
    name:"",
    password:"",
    email:"",
    mobile:"",
    address:""
  })
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(null)

  const inputHandler=(e)=>{
    setFormData(prevData=>({...prevData,[e.target.id]:e.target.value}))
  }
  
  const signUpHandler= async (e)=>{
    setLoading(true)
    e.preventDefault();
    const {
      name,
      email,
      password,
      mobile,
      address
    } = formData
    try {
      const res=await fetch("http://localhost:8000/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name:name,
        password:password,
        email:email,
        mobile:mobile,
        address:address
        

      })
    })

    if(res.status===422){
      const data = await res.json()
      console.log(data)
      throw new Error(data.message)
      
    }
    
    if(res.status!==200 && res.status!==201){
      const data = await res.json()
      console.log(data)
      throw new Error("Unable to authenticate you!")

    }

    setError(null)
    setLoading(false)
    history.push("/login")

    console.log(res)
    } catch (err) {
      console.log(err.message)
      setLoading(false)
      setError(err.message)
      window.alert(error)
    }
    
  }

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
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={inputHandler}
          />
        </div>
        <div class="form-group mt-3">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            value={formData.password}
            placeholder="Password"
            onChange={inputHandler}
          />
        </div>
        <div class="form-group mt-3">
          <label for="email">Email Id</label>
          <input
            type="email"
            class="form-control"
            id="email"
            value={formData.email}
            placeholder="Email"
            onChange={inputHandler}
          />
        </div>
        <div class="form-group mt-3">
          <label for="mobile">Mobile</label>
          <input
            type="tel"
            class="form-control"
            id="mobile"
            placeholder="Mobile"
            value={formData.mobile}
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            onChange={inputHandler}
          />
        </div>
        <div class="form-group mt-3">
          <label for="address">Mobile</label>
          <input
            type="test"
            class="form-control"
            id="address"
            placeholder="Address"
            value={formData.address}
            onChange={inputHandler}
          />
        </div>
        <button type="submit" class={`btn btn-primary my-3 ${loading ? "disabled" : ""}`} onClick={signUpHandler}>
          {!loading && "Submit"}
          {loading && "Loading..."} 
        </button>
        <p>Already have a account?{" "}<span><Link to="/login">Login now</Link></span></p>
      </form>
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
            <img src={Saly44} alt="Logo" style={{"height":"300px","width":"300px"}}/>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Signup;
