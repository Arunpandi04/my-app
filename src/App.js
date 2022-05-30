import "./App.css"
import React from "react"
import Register from "./component/RegisterComponent/Register"
import Login from "./component/Login/Login"
import Dashboard from "./component/Dashboard/Dashboard"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import { Provider } from "react-redux"
import {store,persistor} from "./store/store"
import { Profile } from "./component/Profile/Profile"
import { Links } from "./component/Link/Link"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import PrivateRoute from './routes/PrivateRoutes'
import { PersistGate } from "redux-persist/lib/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <ToastContainer />
      <Router>
        <Routes>
          <Route exact strict path="/" element={<Login />} />
          <Route exact strict path="/sigup" element={<Register />} />
          <Route exact strict path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route exact strict path="/link" element={<PrivateRoute><Links /></PrivateRoute>} />
          <Route exact strict path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
        </Routes>
      </Router>
      </PersistGate>
    </Provider>
  );
}
export default App
