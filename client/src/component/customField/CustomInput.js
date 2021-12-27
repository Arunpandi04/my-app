import React,{useState} from 'react'
import './CustomInput.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons'

function CustomInput(props) {
    const { type,name, onChange, value, clickHandler, showPass} = props
   
   
    return (
         <div className="input">
            <label className=" text-font label-field" style={{ paddingRight: '10px' }}>{name}</label>
            <input type={showPass ? 'text' : 'password' } data-testid="input" className="input-field" name={name} placeholder={name} onChange={onChange} value={value} />
           { type!=='password' ? <></>  : <>{!showPass ? <FontAwesomeIcon icon={faEye} className="icons" onClick={clickHandler} />:
            <FontAwesomeIcon icon={faEyeSlash} className="icons" onClick={clickHandler}
            /> }</>}
         </div>
    )
}

export default CustomInput
