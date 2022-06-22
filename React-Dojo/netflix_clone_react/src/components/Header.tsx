import React from 'react'
// const photo = require('../assets/logo.png');
import logo from '../assets/logo.png'

type Props = {}

const Header = (props: Props) => {
    return (
        <div>
            <h1>header</h1>
            <img src={logo} alt="Netflix Logo" />
        </div>
    )
}

export default Header