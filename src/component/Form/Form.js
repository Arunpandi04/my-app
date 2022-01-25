import React from "react"
import DatePicker from 'react-date-picker'
import CustomInput from "../customField/CustomInput"
import moment from "moment"

const Form = (props) => {
  const { input, onChange, onChangeDate, clickHandler, showPass, ispwd } = props
  return (
    <>
      <CustomInput type="text" label="firstName" name="firstName" onChange={onChange} value={input?.firstName} />
      <CustomInput type="text" label="lastName" name="lastName" onChange={onChange} value={input?.lastName} />
      <CustomInput type="email" label="email" name="email" onChange={onChange} value={input?.email} />
      <CustomInput name="address" label="address" onChange={onChange} value={input?.address} />
      {ispwd && <CustomInput label="password" type="password" name="password" onChange={onChange} value={input?.password} showPass={showPass}
        clickHandler={clickHandler} />}
      <div className="select-div">
        <span className="text-font label">gender</span>
        <select
          className="select"
          name="gender"
          value={input?.gender}
          onChange={onChange}
        >
          <option default="">Select Gender</option>
          <option value="Male">male</option>
          <option value="Female">female</option>
        </select>
      </div>
      <div className="datepicker">
        <span className="text-font label">dob</span>
        <DatePicker
          className='dates'
          name="dob"
          onChange={onChangeDate}
          value={input?.dob ? moment(input?.dob, moment.defaultFormat).toDate(): moment(new Date(), moment.defaultFormat).toDate()}
        />
      </div>
    </>

  )
}

export default Form