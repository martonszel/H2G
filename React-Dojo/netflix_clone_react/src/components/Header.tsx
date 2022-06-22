import React from 'react'
// const photo = require('../assets/logo.png');
import logo from '../assets/logo.png'
import SearchBar from './SearchBar'
import classes from "./Header.module.css";

type Props = {}

const Header = (props: Props) => {
    return (
        <div className={classes.headerContainer}>
            <div className={classes.imageArea}></div>
            <div className={classes.content}>
                <img className={classes.logo} src={logo} alt="Netflix Logo" />
                <button className={classes.button}>+Add Movie</button>
            </div>
            <SearchBar />

        </div>
    )
}

export default Header