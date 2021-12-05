import "./App.css";
import Register from "./component/RegisterComponent/Register";
import Login from "./component/Login/Login";
import Dashboard from "./component/Dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route exact strict path="/sigup" element={<Register />} />
          <Route exact strict path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </Provider>
  );
}
export default App;
