import { useLocation, Navigate } from 'react-router-dom';
 
 const PrivateRoute = ({ children}) => {
    const location = useLocation();
    console.log("location",location.pathname)
    const Auth = localStorage.getItem("Auth")
    const isAuth = !!JSON.parse(Auth) ? true : false
    return isAuth ? children : <Navigate  to={'/'} state={{ from: location?.pathname }} replace/>
  }

  export default PrivateRoute