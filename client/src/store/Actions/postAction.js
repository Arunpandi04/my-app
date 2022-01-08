import axios from '../custom-axios';
import { POST,GET,LOGIN,ERROR ,GETALL,PUT} from "./types";
import {  toast } from 'react-toastify';

export  const createProfile = (formData)=> {
    return async(dispatch) => {
        const res = await axios.post('https://secure-shore-10480.herokuapp.com/signup',formData).catch((e)=>console.log("error"))
        if(res?.data?.data?.success){          
          localStorage.setItem("token", JSON.stringify(res?.data.token))
          localStorage.setItem("id", JSON.stringify(res?.data?.data._id))
          localStorage.setItem("Auth",true)
            dispatch({
                type: POST,
                payload: res.data.data,
            })
            toast.success("SignUp Successfully")
        }else{
          localStorage.setItem("Auth",false)
          dispatch({
            type: ERROR,
            payload: res.data.message,
        })
        toast.warning(res.data.message)
        }
     };
};

export const Loggedin = (formData)=> {
  return async(dispatch) => {
      const res = await axios.post('https://secure-shore-10480.herokuapp.com/signin',formData)
      if(res?.data?.success){
        localStorage.setItem("token", JSON.stringify(res?.data.token))
        localStorage.setItem("id", JSON.stringify(res?.data?.data._id))
        localStorage.setItem("Auth",true)
          dispatch({
              type: LOGIN,
              payload: res.data.data,
          })
          toast.success("SignIN Successfully")
      }else{
        localStorage.setItem("token", JSON.stringify(""))
        localStorage.setItem("Auth",false)
        dispatch({
          type: ERROR,
          payload: res.data.message,
      })
      toast.error(res.data.message)
      }
   };
};

export const  getAllUser = () =>{
  return async(dispatch) => {
      const res = await axios.get('https://secure-shore-10480.herokuapp.com/').catch((e)=>console.log("error"))      
      if(res?.data){
          dispatch({
              type: GETALL,
              payload: res.data.data,
          })
      }else{
        dispatch({
          type: ERROR,
          payload: res,
      })
      }
   };
}

export const getProfile = (id)=> {
    return async(dispatch) => {
        const res = await axios.get(`https://secure-shore-10480.herokuapp.com/user/${id}`).catch((e)=>console.log("error"))      
      
        if(res?.data){
            dispatch({
                type: GET,
                payload: res.data.data,
            })
        }else{
          dispatch({
            type: ERROR,
            payload: res,
        })
        }
     }
}


export const updateUser = (id,data)=> {
  return async(dispatch) => {
      const res = await axios.put(`https://secure-shore-10480.herokuapp.com/user/${id}`,data).catch((e)=>console.log("error"))
      if(res?.data){
          dispatch({
              type: PUT,
              payload: res.data.data,
          })
      }else{
        dispatch({
          type: ERROR,
          payload: res,
      })
      }
   }
}