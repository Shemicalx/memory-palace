import React, { useContext } from 'react'
import { InputsContext } from '../../Contexts/InputsContext'

const ControlWrapper = (props) => {

    const { setCurrentInput } = useContext(InputsContext);

    return (
        <div 
            className="controlWrapper" 
            onClick={()=>setCurrentInput(()=>props.controlName)}
        >
            {props.children}
        </div>
    )
}

export default ControlWrapper
