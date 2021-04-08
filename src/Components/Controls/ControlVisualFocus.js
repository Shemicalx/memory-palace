import React from 'react'
import '../../Styles/ControlVisualFocus.css'

const ControlVisualFocus = (props) => {

    const {currentInput, children} = props;

    const position = () => {
        switch(currentInput){
            case 'numbers': 
                return {'top': '0'}
            case 'space': 
                return {'top': '20vh'}
            case 'word': 
                return {'top': '40vh'}
            case 'sentence': 
                return {'top': '60vh'}
            case 'story': 
                return {'top': '80vh'}
            default:
                return {'top': '0'}
        }
    }

    return (
        <span className="controlVisualFocus" style={position()}>
            <span className="guidingArrow" />
            {children}
            <span className="sideBarMask" />
        </span>
    )
}

export default ControlVisualFocus
