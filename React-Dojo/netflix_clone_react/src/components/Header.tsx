import React from 'react'
// const photo = require('../assets/logo.png');
import logo from '../assets/logo.png'
import SearchBar from './SearchBar'
import classes from "./Header.module.css";
import AddMovieModal from './AddMovieModal';
import { useState } from "react";

type Props = {}

const Header = (props: Props) => {
    const [show, setShow] = useState<boolean>(false);
    return (
        <div className={classes.headerContainer}>
            <div className={classes.imageArea}></div>
            <div className={classes.content}>
                <img className={classes.logo} src={logo} alt="Netflix Logo" />
                <button onClick={() => setShow(true)} className={classes.button}>+Add Movie</button>

                <AddMovieModal hide={() => setShow(false)} show={show} />
            </div>
            <SearchBar />

        </div>
    )
}

export default Header