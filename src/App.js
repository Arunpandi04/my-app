import "./App.css"
import React from "react"
import Register from "./component/RegisterComponent/Register"
import Login from "./component/Login/Login"
import Dashboard from "./component/Dashboard/Dashboard"
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import { Provider } from "react-redux"
import store from "./store/store"
import { Profile } from "./component/Profile/Profile"
import { Links } from "./component/Link/Link"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const PrivateRoute = ({ children}) => {
  const Auth = localStorage.getItem("Auth")
  const isAuth = !!JSON.parse(Auth) ? true : false
  return isAuth ? children : <Navigate to="/" />
}

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
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
export default App
