import React, { useState } from 'react'
import CustomInput from './customField/CustomInput'
import './Dashboard.scss'


const Dashboard = props => {
    const [input, setInput] = useState({"firstName":"","lastName":"","email":"","address":""})
    const onChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    return (
        <div className='input-container'>
           <div className="input-fields">
                <CustomInput name="firstName" onChange={onChange} value={input.firstName} />
                <CustomInput name="lastName" onChange={onChange} value={input.lastName} />
                <CustomInput name="email" onChange={onChange} value={input.email} />
                <CustomInput name="address" onChange={onChange} value={input.address} />
                <div className="button">
                <button className="btn">submit</button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
