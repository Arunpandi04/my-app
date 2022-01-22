import GoogleLogin from 'react-google-login'
import {socialSignin} from './store/Actions/postAction'
import { useDispatch } from "react-redux"
require('dotenv').config()

const Google = () => {
    const dispatch = useDispatch()

    const handleLogin = (data) => {
        let formData={}
        if(data?.profileObj){
        formData.email = data.profileObj.email
        formData.firstName = data.profileObj.givenName
        dispatch(socialSignin(formData))
        }
    }

    return (
        <GoogleLogin
        className="button"
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Google"
            onSuccess={handleLogin}
            onFailure={handleLogin}
            cookiePolicy={'single_host_origin'}
        />
    )
}
export default Google