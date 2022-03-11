import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import AuthContextProvider from "./store/auth-context"

ReactDOM.render(
  
    <Router>
      <AuthContextProvider>
    <App />
    </AuthContextProvider>
    </Router>
    ,
  document.getElementById("root")
);