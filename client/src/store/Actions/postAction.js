import axios from '../custom-axios';
import { POST,GET,LOGIN,ERROR } from "./types";

export  const createProfile = (formData)=> {
    return async(dispatch) => {
        // const res = await axios({
        //   method: 'post',
        //   url: 'http://localhost:3000/signup',
        //   headers: { 
        //     'Content-Type': 'application/json'
        //   },
        //   data : formData
        // }).catch((e)=>console.log("reeoe"))
        // console.log("formData",formData)
        const res = await axios.post('http://localhost:3000/signup',formData).catch((e)=>console.log("error"))
        console.log("res?.data.register --->",res?.data.token)
        if(res?.data){
          localStorage.setItem("token", JSON.stringify(res?.data.token))
            dispatch({
                type: POST,
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

export const Loggedin = (formData)=> {
  return async(dispatch) => {
      // const res = await axios({
      //   method: 'post',
      //   url: `http://localhost:3000/signin`,
      //   data : formData
      // }).catch((e)=>console.log("reeoe"))
      const res = await axios.post('http://localhost:3000/signin',formData).catch((e)=>console.log("error"))
      console.log("res?.data.loggedin --->",res?.data.token)
      if(res?.data){
        localStorage.setItem("token", JSON.stringify(res?.data.token))
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
      //   url: `http://localhost:3000/user/${id}`,
      //   headers: { 
      //     'Content-Type': 'application/json'
      //   }
      // }).catch((e)=>console.log("reeoe"))
        const res = await axios.get(`http://localhost:3000/user/${id}`).catch((e)=>console.log("error"))      
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