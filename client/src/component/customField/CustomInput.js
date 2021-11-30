import React from 'react'
import './CustomInput.scss'

function CustomInput(props) {
    const { name, onChange, value } = props
    return (
         <div className="input">
            <label className="label-field" style={{ paddingRight: '10px' }}>{name}</label>
            <input data-testid="input" className="input-field" type="text" name={name} placeholder={name} onChange={onChange} value={value}/>
         </div>
    )
}

export default CustomInput
