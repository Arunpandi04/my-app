import React from "react"
import MicrosoftLogin from "react-microsoft-login"
import { socialSignin } from './store/Actions/postAction'
import { useDispatch } from "react-redux"
import img from './microsoft.png'
import { Figure } from 'react-bootstrap'
require('dotenv').config()

const Microsoft = () => {
  const dispatch = useDispatch()

  const loginHandler = (err, data, msal) => {
    console.log("err", err);
    // some actions
    if (!err && data) {
      let formData = {}
      formData.email = data?.account?.emanameil
      formData.firstName = data?.account?.userName
      dispatch(socialSignin(formData))
    }
  }

  return (
  <>
    <MicrosoftLogin className="microsoft-btn" useLocalStorageCache={true} clientId={process.env.REACT_APP_AZURE_ACTIVE_DIRECTORY_APP_CLIENT_ID} authCallback={loginHandler}>

      <div className="microsoft-btn">
        <Figure style={{ paddingLeft: "7px" }}><Figure.Image
          width={20}
          height={20}
          alt="171x180"
          src={img}
        /></Figure>
        <div style={{ paddingLeft: "7px" }}>
          <h6 >Microsoft</h6>
        </div>
      </div>
    </MicrosoftLogin>
  </>
  )
}

export default Microsoft