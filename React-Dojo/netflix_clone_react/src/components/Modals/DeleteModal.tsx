import React from 'react'
import FullButton from '../FullButton';
import classes from './Modals.module.css'
import { useDeleteMoviesMutation } from '../../features/movie-api-slice';
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { reset } from "../../features/movie-slice";


type Props = {
    close: () => void;
}

const DeleteModal: React.FC<Props> = ({ close }) => {

    const [deleteMovie, result] = useDeleteMoviesMutation();
    const oneMovie = useAppSelector((state) => state.movie.oneMovie);
    const dispatch = useAppDispatch();

    const confirmDelete = async () => {
        await deleteMovie(oneMovie.id);
        dispatch(reset())
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