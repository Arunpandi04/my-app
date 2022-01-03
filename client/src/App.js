import "./App.css";
import React from "react";
import Register from "./component/RegisterComponent/Register";
import Login from "./component/Login/Login";
import Dashboard from "./component/Dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { Profile } from "./component/Profile";
import { Links } from "./component/Links";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children}) => {
  const Auth = localStorage.getItem("Auth")
  return JSON.parse(Auth) ? children : <Navigate to="/" />
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route exact strict path="/sigup" element={<Register />} />
          <Route exact strict path="/profile" element={<Profile />} />
          <Route exact strict path="/link" element={<Links />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
        </Routes>
      </Router>
    </Provider>
  );
}
export default App;
