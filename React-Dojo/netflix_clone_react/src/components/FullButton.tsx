import React from 'react'
import classes from "./FullButton.module.css";

type Props = {
    name: string
    onClick: () => void;
}

const FullButton: React.FC<Props> = ({ name, onClick }) => {
    return (
        <React.Fragment>
            <button className={classes.fullButton} onClick={onClick}>{name}</button>
        </React.Fragment>
    )
}

export default FullButton