import React from 'react'
import './CustomInput.scss'

function CustomInput(props) {
    const { type,name, onChange, value } = props
    return (
         <div className="input">
            <label className=" text-font label-field" style={{ paddingRight: '10px' }}>{name}</label>
            <input type={type} data-testid="input" className="input-field" name={name} placeholder={name} onChange={onChange} value={value}/>
         </div>
    )
}

export default CustomInput
