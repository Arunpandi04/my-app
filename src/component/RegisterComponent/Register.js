import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createProfile } from "../../store/Actions/postAction"
import Dashboard from "../Dashboard/Dashboard"
import { Link } from "react-router-dom"
import Form from '../Form/Form'
import "../Form/Form.scss"

const Register = () => {
  const [showPass, setShowPass] = useState(false)
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    dob: new Date(),
    gender: "",
    password: ""
  })

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  const clickHandler = () => {
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
      dob: new Date(),
      gender: "",
      password: ""
    })
  }

  const selector = useSelector(state => state.post)
  if (!selector.loading) {
    return <Dashboard />
  }

  const onChangeDate = (date) => {
    setInput({ ...input, dob: date })
  }

  return (
    <div className="input-container">
      <div className="input-fields">
        <h3 className="text-font" style={{ textAlign: "center" }}> SIGNUP </h3>
        <Form onChange={onChange} input={input} onChangeDate={onChangeDate} ispwd={true} clickHandler={clickHandler} showPass={showPass} />
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
  )
}

export default Register
