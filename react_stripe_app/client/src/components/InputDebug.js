import React from 'react'

const InputDebug = ({label, value, setValue, type="text"}) => {
    return (
        <div className="input-group">
            <span className="input-group-text">{label}</span>
            <input type={type} onChange={(e) => setValue( e.target.value)} value={value} />


        </div>
    )
}





export default InputDebug