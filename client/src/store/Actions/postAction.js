import axios from "axios";
import { POST,GET,ERROR } from "./types";

export  const createProfile = (formData)=> {
    formData.password = "Admin"
    return async(dispatch) => {
        const res = await axios({
          method: 'post',
          url: 'http://localhost:3000/login',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : formData
        })
        if(res.data){
            dispatch({
                type: POST,
                payload: res.data,
            })
        }else{
          dispatch({
            type: ERROR,
            payload: res.data,
        })
        }
     };
};


export const getProfile = ()=> {
    return async(dispatch) => {
        const res = await axios({
          method: 'get',
          url: `http://localhost:3000/user/${"61a4ab018ba40873e6e48c7e"}`,
          headers: { 
            'Content-Type': 'application/json'
          }
        })
        if(res.data){
            dispatch({
                type: GET,
                payload: res.data,
            })
        }else{
          dispatch({
            type: ERROR,
            payload: res.data,
        })
        }
     };
};