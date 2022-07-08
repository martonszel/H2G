import React from 'react'
import classes from './Modals.module.css'
import logo from '../../assets/success.webp'

type Props = {
    close: () => void;
}

const SuccessModal: React.FC<Props> = ({ close }) => {
    return (
        <React.Fragment>
            <div className={classes.contentContainer}>
                <div className={classes.modalClose} onClick={() => close()} >X</div>
                <img className={classes.logo} src={logo} alt="Netflix Logo" />
                <h1>Congratulations!</h1>
                <p>The movie has been added to database successfully</p>
            </div>
        </React.Fragment >
    )
}

export default SuccessModal



// onClick={() => { setSubmitted(false); hide() }}