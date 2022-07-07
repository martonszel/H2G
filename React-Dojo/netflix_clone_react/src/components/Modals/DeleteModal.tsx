import React from 'react'
import FullButton from '../FullButton';
import classes from './Modals.module.css'


type Props = {
    close: () => void;
}

const DeleteModal: React.FC<Props> = ({ close }) => {

    const confirmDelete = () => {
        console.log('deleted');
    }

    return (
        <React.Fragment>
            <div className={classes.contentContainer}>
                <div className={classes.modalClose} onClick={() => close()} >X</div>
                <h2>Are you sure you want to delete this movie?</h2>
                <FullButton name='Confirm' onClick={confirmDelete} />
            </div>
        </React.Fragment >
    )
}

export default DeleteModal