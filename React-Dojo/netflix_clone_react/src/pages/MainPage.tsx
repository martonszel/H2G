import React from 'react'
import MovieList from '../components/MovieList'
import { useState, useEffect } from "react";
import { Movie } from '../model/Movies';

type Props = {}

const MainPage: React.FC = (props: Props) => {

    const [movies, setMovies] = useState<Movie[]>([])
    const [error, setError] = useState<null | Error>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(true);


    const getAllMovies = async () => {

        try {
            setTimeout(async () => {
                const response = await fetch('movies.json')

                if (!response.ok) {
                    throw Error('couldnt fetch data')
                }

                const data = await response.json()

                const fromattedResult = data.movies.map((movie: Movie) => (
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
        <div>
            {error && <div><h1> Error: {error.message} </h1></div>}
            {isLoaded && <div ><h1>Loading...</h1></div>}
            {movies &&
                <div>
                    <p>{movies.length} movies found</p>
                    <ul>
                        {movies.map((movie) =>
                            <li>
                                <p>{movie.id}</p>
                                <p>{movie.title}</p>
                            </li>
                        )}
                    </ul>

                </div>
            }
            <MovieList />
        </div>


    )
}

export default MainPage