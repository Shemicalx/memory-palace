import React from 'react'
import '../../Styles/Navigation.css'
import LegendControl from '../Controls/LegendControl.js'

const Navbar = (props) => {

    return (
        <nav id="navbar">
            <ul>
                {props.children.map(link => {
                    return (
                        <li key={link.props.to}>{link}</li>
                    )
                })}
            </ul>
            <LegendControl />
        </nav>
    )
}

export default Navbar
