import React from "react";
import classes from './Modals.module.css'
import ReactDOM from 'react-dom';

type Props = {
    show: boolean;
    children: React.ReactNode;
}

const ModalContainer: React.FC<Props> = ({ show,  children }) => {

    if (!show) {
        return null
    }

    return show ? ReactDOM.createPortal(
        <React.Fragment>
            {
                show ?
                    <div className={classes.modalContainer}>
                        <div className={classes.modal} >
                            <main className={classes.modalContent}>
                                {children}
                            </main>
                        </div>
                    </div>
                    : null
            }
        </React.Fragment >
        , document.body) : null;
}

export default ModalContainer