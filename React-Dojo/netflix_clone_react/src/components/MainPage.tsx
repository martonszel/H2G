import React from 'react'
import MovieCard from './MovieCard';
import MovieTabs from './MovieTabs';
import { useAppSelector } from "../store/hooks";
import { useMovies } from '../features/movies.hook';
import { Movie } from '../models/Movies';

type Props = {}

const MainPage: React.FC = (props: Props) => {

    // const movies = useAppSelector((state) => state.movie.movies);
    // const filteredMovies = useAppSelector((state) => state.movie.filteredMovies);
    const movies: Movie[] = useMovies()

    return (
        <div className='MainPage'>
            <MovieTabs />
            {
                <div>
                    <p className="moviesFound"> <strong>{movies.length}</strong> movies found</p>
                    <div className="movieContainer">
                        {movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
                    </div>
                </div>
            }
        </div >
    )


    // return (
    //     <div className='MainPage'>
    //         <MovieTabs />
    //         {
    //             filteredMovies.length > 0 ? (
    //                 <div>
    //                     <p className="moviesFound"> <strong>{filteredMovies.length}</strong> movies found</p>
    //                     <div className="movieContainer">
    //                         {filteredMovies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
    //                     </div>
    //                 </div>
    //             ) : (
    //                 <div>
    //                     <p className="moviesFound"> <strong>{movies.length}</strong> movies found</p>
    //                     <div className="movieContainer">
    //                         {movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
    //                     </div>
    //                 </div>
    //             )
    //         }
    //     </div >
    // )
}

export default MainPage