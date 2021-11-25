import React from 'react'
import './CustomInput.scss'

function CustomInput(props) {
    const { name, onChange, value } = props
    return (
         <div className="input">
            <label className="label-field" style={{ paddingRight: '10px' }}>{name}</label>
            <input className="input-field" type="text" name={name} placeholder={name} onChange={(e) => { onChange(e) }} value={value} />
         </div>
    )
}

export default CustomInput
