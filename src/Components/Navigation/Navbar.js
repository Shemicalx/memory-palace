import React from 'react'
import '../../Styles/Navigation.css'
import {useLocation} from 'react-router-dom'
import LegendControl from '../Controls/LegendControl.js'

const Navbar = (props) => {

    console.log(useLocation());
    const {pathname: location} = useLocation();

    return (
        <nav id="navbar">
            <div className="topContainer">
                <h1>Memory Palace</h1>
                <ul>
                    {props.children.map(link => {
                        return (
                            <li 
                                className={location === link.props.to ? 'active' : ''} 
                                key={link.props.to}
                            >
                                {link}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="bottomContainer" style={location !== '/numbers' ? {'visibility': 'hidden'} : {}}>
                <LegendControl />
            </div>
        </nav>
    )
}

export default Navbar
