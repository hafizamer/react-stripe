import React from 'react'

const ButtonDebug = ({type="primary", text= "Magic", handleDebug })=>{
    return(
        <button className={`btn btn-${type}`} onClick={handleDebug}>
            {text}
        </button>
    )
}

export default ButtonDebug