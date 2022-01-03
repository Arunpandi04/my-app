import axios from '../custom-axios';
import { POST,GET,LOGIN,ERROR } from "./types";

export  const createProfile = (formData)=> {
    return async(dispatch) => {
        // const res = await axios({
        //   method: 'post',
        //   url: 'https://secure-shore-10480.herokuapp.com//signup',
        //   headers: { 
        //     'Content-Type': 'application/json'
        //   },
        //   data : formData
        // }).catch((e)=>console.log("reeoe"))
        // console.log("formData",formData)
        const res = await axios.post('https://secure-shore-10480.herokuapp.com/signup',formData).catch((e)=>console.log("error"))
        console.log("res?.data.register --->",res?.data.token)
        if(res?.data){
          localStorage.setItem("token", JSON.stringify(res?.data.token))
            dispatch({
                type: POST,
                payload: res.data,
            })
        }else{
          localStorage.setItem("token", JSON.stringify(res?.data.token))
          localStorage.setItem("id", JSON.stringify(res?.data?.data._id))
          localStorage.setItem("Auth",true)
          dispatch({
            type: ERROR,
            payload: res,
        })
        }
     };
};

export const Loggedin = (formData)=> {
  return async(dispatch) => {
      // const res = await axios({
      //   method: 'post',
      //   url: `https://secure-shore-10480.herokuapp.com//signin`,
      //   data : formData
      // }).catch((e)=>console.log("reeoe"))
      const res = await axios.post('https://secure-shore-10480.herokuapp.com/signin',formData).catch((e)=>console.log("error"))
      if(res?.data){
        localStorage.setItem("token", JSON.stringify(res?.data.token))
        localStorage.setItem("id", JSON.stringify(res?.data?.data._id))
        localStorage.setItem("Auth",true)
          dispatch({
              type: LOGIN,
              payload: res.data,
          })
      }else{
        localStorage.setItem("token", JSON.stringify(""))
        dispatch({
          type: ERROR,
          payload: res,
      })
      }
   };
};

export const getProfile = (id)=> {
    return async(dispatch) => {
      // const res = await axios({
      //   method: 'post',
      //   url: `https://secure-shore-10480.herokuapp.com//user/${id}`,
      //   headers: { 
      //     'Content-Type': 'application/json'
      //   }
      // }).catch((e)=>console.log("reeoe"))
        const res = await axios.get(`https://secure-shore-10480.herokuapp.com/user/${id}`).catch((e)=>console.log("error"))      
        console.log("res?.data.GET --->",res?.data)
        if(res?.data){
            dispatch({
                type: GET,
                payload: res.data,
            })
        }else{
          dispatch({
            type: ERROR,
            payload: res,
        })
        }
     };
};