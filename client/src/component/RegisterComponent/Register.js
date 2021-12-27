import React, { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import CustomInput from "../customField/CustomInput";
import "./Register.scss";
import { createProfile } from "../../store/Actions/postAction";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import Dashboard from "../Dashboard/Dashboard";
import { Link } from "react-router-dom";

const Register = () => {
  const[showPass,setShowPass]=useState(false)
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    dob: "",
    gender: "",
    password:""
  })

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  const clickHandler=()=>{
    setShowPass(!showPass)
}
  const dispatch = useDispatch();
  const onSubmit = () => {
    dispatch(createProfile(input));
    setInput({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      dob: "",
      gender: "",
      password:""
    });
  };
  
  const selector = useSelector(state => state.post)
  if(!selector.loading){
      return <Dashboard />
  }
  return (
    <div className="input-container">
      <div className="input-fields">
      <h3 className="text-font" style={{textAlign:"center"}}> REGISTER page</h3>
        <CustomInput type="text" name="firstName" onChange={onChange} value={input.firstName} />
        <CustomInput type="text" name="lastName" onChange={onChange} value={input.lastName} />
        <CustomInput type="email" name="email" onChange={onChange} value={input.email} />
        <CustomInput name="address" onChange={onChange} value={input.address} />
        <CustomInput type="password" name="password" onChange={onChange} value={input.password} showPass={showPass}
          clickHandler={clickHandler} />
        <div className="datepicker">
          <span className="text-font label">dob</span>
          <DatePicker
            name="dob"
            value={input.dob}
            placeholderText="DOB"
            onChange={(date) =>
              setInput({ ...input, dob: moment(date).format("DD/MM/YYYY") })
            }
          />
        </div>
        <div className="select-div">
          <span className="text-font label">gender</span>
          <select
            className="select"
            name="gender"
            value={input.gender}
            onChange={onChange}
          >
            <option default="">Select Gender</option>
            <option value="Male">male</option>
            <option value="Female">female</option>
          </select>
        </div>
        <div className="button">
          <button className="btn" onClick={onSubmit}>
            submit
          </button>
        </div>
        <h5 style={{ textAlign: "center" }}>
          Do u have Account <Link to="/">signin</Link>
        </h5>
      </div>
    </div>
  );
};

export default Register;
