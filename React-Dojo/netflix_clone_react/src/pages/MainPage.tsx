import React from 'react'
import { useState, useEffect } from "react";
import { Movie } from '../model/Movies';
import { GET } from '../services/services';
import MovieCard from '../components/MovieCard';
import MovieTabs from '../components/MovieTabs';

type Props = {}

const MainPage: React.FC = (props: Props) => {

    const [movies, setMovies] = useState<Movie[]>([])
    const [error, setError] = useState<null | Error>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(true);


    const getAllMovies = async () => {

        try {
            setTimeout(async () => {

                const url = "movies.json";
                const response = await GET(url);

                console.log(response);


                const fromattedResult = response.movies.map((movie: Movie) => (
                    {
                        id: movie.id,
                        title: movie.title,
                        release_date: movie.release_date,
                        genre: movie.genre,
                        thumbnail: movie.thumbnail,
                        movie_url: movie.movie_url,
                        rating: movie.rating,
                        runtime: movie.runtime
                    } as Movie
                ));

                setMovies(fromattedResult)
                setIsLoaded(false)
                setError(null)
            }, 2000);

        } catch (error) {

            setIsLoaded(false)
            if (error instanceof Error) {
                setError(error)
            }
        }
    }


    useEffect(() => {
        getAllMovies()
    }, [])


    return (
        <div className='MainPage'>
            <MovieTabs />
            {error && <div><h1> Error: {error.message} </h1></div>}
            {isLoaded && <div ><h1>Loading...</h1></div>}
            {
                movies?.length > 0 ? (
                    <div>
                        <p className="moviesFound"> <strong>{movies.length}</strong> movies found</p>
                        <div className="movieContainer">
                            {movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
                        </div>
                    </div>


                ) : (
                    <div className={"empty"}>
                        <h2>No movies found</h2>
                    </div>
                )
            }
        </div>


    )
}

export default MainPage