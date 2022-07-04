import React from 'react'
import { Movie } from '../models/Movies'
import classes from './MovieCard.module.css'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getOneMovie } from "../features/movie-slice";


type Props = {
    movie: Movie
}

const MovieCard: React.FC<Props> = ({ movie }) => {

    const oneMovie = useAppSelector((state) => state.movie.oneMovie)
    const dispatch = useAppDispatch()

    return (


        <div className={classes.card}>
            <div className={classes.poster}><img onClick={() => dispatch(getOneMovie(movie))} src={movie.thumbnail !== 'N/A' ? movie.thumbnail : 'https://via.placeholder.com/400'} alt={movie.title} /></div>
            <div className={classes.details}>
                <h2>{movie.title} ({movie.release_date})</h2><span></span>
                <div className={classes.tags}>{movie.genre}</div>
            </div>
        </div>
    )
}

export default MovieCard