import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <Router>
    <Provider store={store}>
    <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);