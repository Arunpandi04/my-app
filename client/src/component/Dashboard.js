import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CustomInput from './customField/CustomInput'
import './Dashboard.scss'
import { createProfile, getProfile } from '../store/Actions/postAction'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import "react-datepicker/dist/react-datepicker.css";
import { fireEvent } from '@testing-library/react'

const Dashboard = () => {
    const [input, setInput] = useState({ "firstName": "", "lastName": "", "email": "", "address": "", "dob": "","gender":"" })
    const onChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const dispatch = useDispatch()
    const onSubmit = () => {
        dispatch(createProfile(input))
        setInput({ "firstName": "", "lastName": "", "email": "", "address": "", "dob": "","gender":"" })
    }
    const selector = useSelector(state => state.post)

    useEffect(() => {
        dispatch(getProfile())
    }, [dispatch])

    return (
        <div className='input-container'>
            <div className="input-fields">
                <CustomInput name="firstName" onChange={onChange} value={input.firstName} />
                <CustomInput name="lastName" onChange={onChange} value={input.lastName} />
                <CustomInput name="email" onChange={onChange} value={input.email} />
                <CustomInput name="address" onChange={onChange} value={input.address} />
                <div className="datepicker">
                    <span className="label"> DOB</span>
                    <DatePicker  value={input.dob} placeholderText="DOB" onChange={(date) =>setInput({ ...input, ["dob"]: moment(date).format("DD/MM/YYYY") })} />
                </div>
                <div className="select-div">
                    <span className="label"> gender</span>
                    <select className="select" name ="gender" value={input.gender} onChange={onChange}>
                        <option default="">Select Gender</option>
                        <option value="Male">male</option>
                        <option value="Female">female</option>
                    </select>
                </div>
                <div className="button">
                    <button className="btn" onClick={onSubmit}>submit</button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
