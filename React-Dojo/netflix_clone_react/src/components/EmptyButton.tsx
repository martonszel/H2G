import React from 'react'
import classes from "./EmptyButton.module.css";

type Props = {
    name: string,
    // ez miez 
    onClick?: (e: any) => void;
}

const EmptyButton: React.FC<Props> = ({ name, onClick }) => {
    return (
        <React.Fragment>
            <button className={classes.emptyButton} onClick={onClick}>{name}</button>
        </React.Fragment>
    )
}

export default EmptyButton