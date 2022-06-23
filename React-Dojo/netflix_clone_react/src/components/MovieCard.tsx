import React from 'react'
import { Movie } from '../model/Movies'
import classes from './MovieCard.module.css'

type Props = {
    movie: Movie
}

const MovieCard: React.FC<Props> = ({ movie }) => {

    return (
        <div className={classes.card}>
            <div className={classes.poster}><img src={movie.thumbnail !== 'N/A' ? movie.thumbnail : 'https://via.placeholder.com/400'} alt={movie.title} /></div>
            <div className={classes.details}>
                <h2>{movie.title} ({movie.release_date})</h2><span></span>
                <div className={classes.tags}>{movie.genre}</div>
            </div>
        </div>
    )
}

export default MovieCard