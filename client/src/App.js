import './App.css';
import Dashboard from './component/Dashboard'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
    <Router data-testid="button-up">
      <Routes>
        <Route  path="/" element={<Dashboard />} />
      </Routes>
    </Router>
    </Provider>
  );
}
export default App;
