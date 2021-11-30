import React, { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import CustomInput from './customField/CustomInput'
import './Dashboard.scss'
import { createProfile,getProfile } from '../store/Actions/postAction'

const Dashboard = () => {
    const [input, setInput] = useState({ "firstName": "", "lastName": "", "email": "", "address": "" })
    
    const onChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const dispatch = useDispatch()
    const onSubmit = () => {
        console.log("onSubmit--->")
        dispatch(createProfile(input))
    }
const selector=useSelector(state=>state.post)

    useEffect(()=>{
        dispatch(getProfile())
    },[dispatch])

    console.log("selector--->",selector)
    return (
        <div className='input-container'>
            <div className="input-fields">
                <CustomInput name="firstName" onChange={onChange} value={input} />
                <CustomInput name="lastName" onChange={onChange} value={input} />
                <CustomInput name="email" onChange={onChange} value={input} />
                <CustomInput name="address" onChange={onChange} value={input} />
                <div className="button">
                    <button className="btn" onClick={onSubmit}>submit</button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
