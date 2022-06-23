import React from 'react'
import { Movie } from '../model/Movies'
import classes from './MovieCard.module.css'

type Props = {
    movie: Movie
}

const MovieCard: React.FC<Props> = ({ movie }) => {
    return (
        <div className={classes.movie}>
            <div>
                <p>{movie.release_date}</p>
            </div>
            <div><img src={movie.thumbnail !== 'N/A' ? movie.thumbnail : 'https://via.placeholder.com/400'} alt={movie.title} /></div>
            <div>
                <span>{movie.genre}</span>
                <h3>{movie.title}</h3>
            </div>
        </div>
    )
}

export default MovieCard