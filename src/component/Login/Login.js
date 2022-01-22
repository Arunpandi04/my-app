import React, { useState } from "react"
import CustomInput from "../customField/CustomInput"
import { useDispatch, useSelector } from "react-redux"
import { Loggedin } from "../../store/Actions/postAction"
import { Link } from "react-router-dom"
import { Navigate } from 'react-router'
import Google from '../../GoogleAuth'
import Microsoft from "../../MicrosoftAuth"
import "../Form/Form.scss"

const Login = () => {
  const [input, setInput] = useState({ email: "", password: "" })
  const [showPass, setShowPass] = useState(false)

  const onChange = (e) => {
    e.preventDefault()
    setInput({ ...input, [e.target.name]: e.target.value })
  };
  const selector = useSelector((state) => state.post)
  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(Loggedin(input))
    if (!selector.loading) {
      setInput({
        email: "",
        password: "",
      })
    }
  }

  const clickHandler = () => {
    setShowPass(!showPass)
  }

  if (!selector.loading) {
    return <Navigate to='/dashboard' />
  }

  return (
    <div className="input-container">

      <div className="input-fields">
        <h3 className="text-font" style={{ textAlign: "center" }}> SIGNIN </h3>
        <CustomInput
          type="email"
          name="email"
          label="email"
          onChange={onChange}
          value={input.email}
        />
        <CustomInput
          type="password"
          name="password"
          label="password*"
          onChange={onChange}
          value={input.password}
          showPass={showPass}
          clickHandler={clickHandler}
        />
        <div className="button">
          <button className="btn" onClick={(e) => onSubmit(e)}>
            submit
          </button>
        </div>
        <h5 style={{ textAlign: "center" }}>
          Create an Account <Link to="/sigup">signup</Link>
        </h5>
        <div className="social">
        <Google />
       <Microsoft />
        </div>
       
      </div>
    </div>
  );
};

export default Login
