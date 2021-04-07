import React from 'react'
import '../../Styles/Navigation.css'
import LegendControl from '../Controls/LegendControl.js'

const Navbar = (props) => {

    return (
        <nav id="navbar">
            <h1>Memory Palace</h1>
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
