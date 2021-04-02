import React from 'react'
import '../../Styles/Navigation.css'

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
        </nav>
    )
}

export default Navbar
