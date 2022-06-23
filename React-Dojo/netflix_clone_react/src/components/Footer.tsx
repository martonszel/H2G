import React from 'react'
import classes from "./Footer.module.css";
import logo from '../assets/logo.png'

type Props = {}

const Footer = (props: Props) => {
    return (
        <section className={classes.footerContainer}>

            <p>{new Date().getFullYear()} &copy; Márton Szél</p>
            <img className={classes.logo} src={logo} alt="Netflix Logo" />
        </section>
    )
}

export default Footer