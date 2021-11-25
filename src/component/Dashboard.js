import React, { useState } from 'react'
import CustomInput from './customField/CustomInput'
import './Dashboard.scss'


const Dashboard = props => {
    const [input, setInput] = useState({})
    const onChange = (e) => {
        console.log("input", e.target.value)
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    console.log("value", input)
    return (
        <div className='input-container'>
           <div className="input-fields">
                <CustomInput name="fistName" onChange={(e) => onChange(e)} value={input.firstName} />
                <CustomInput name="lastName" onChange={(e) => onChange(e)} value={input.lastName} />
                <CustomInput name="email" onChange={(e) => onChange(e)} value={input.email} />
                <CustomInput name="address" onChange={(e) => onChange(e)} value={input.address} />
                <div className="button">
                <button className="btn">submit</button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
