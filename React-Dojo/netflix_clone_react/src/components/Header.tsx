import React from 'react'
// const photo = require('../assets/logo.png');
import logo from '../assets/logo.png'
import SearchBar from './SearchBar'
import classes from "./Header.module.css";
import { useState } from "react";
import ModalContainer from './Modals/ModalContainer';
import FormModal from './Modals/FormModal';

type Props = {}

const Header = (props: Props) => {
    const [showFormModal, setShowFormModal] = useState<boolean>(false);

    return (
        <div className={classes.headerContainer}>
            <div className={classes.imageArea}></div>
            <div className={classes.content}>
                <img className={classes.logo} src={logo} alt="Netflix Logo" />
                <button onClick={() => setShowFormModal(true)} className={classes.button}>+Add Movie</button>
                <ModalContainer show={showFormModal}>
                    <FormModal name='Add Movie' updatable={false} close={() => setShowFormModal(false)} />
                </ModalContainer >
            </div>
            <SearchBar />
        </div>
    )
}

export default Header