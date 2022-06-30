import React from 'react'
import { useState, useEffect } from "react";
import { Movie } from '../models/Movies';
import { GET } from '../services/services';
import MovieCard from '../components/MovieCard';
import MovieTabs from '../components/MovieTabs';
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { increment, incrementWithValue } from "../features/movie-slice";
import { useFetchBreedsQuery } from '../features/dog-api-slice';

type Props = {}

const MainPage: React.FC = (props: Props) => {

    const count = useAppSelector((state) => state.movie.value)
    const dispatch = useAppDispatch()

    const { data = [], isFetching } = useFetchBreedsQuery()

    const handleClick = () => {
        dispatch(increment())
    }

    const handleClickWithValue = () => {
        dispatch(incrementWithValue(10))
    }

    const [movies, setMovies] = useState<Movie[]>([])
    const [error, setError] = useState<null | Error>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(true);


    const getAllMovies = async () => {


        setTimeout(async () => {

            try {

                const url = "http://localhost:8000/movies";
                const response = await GET(url);

                const fromattedResult = response.map((movie: Movie) => (
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


            } catch (error) {

                setIsLoaded(false)
                if (error instanceof Error) {
                    setError(error)
                }
            }

        }, 1000);


    }

    useEffect(() => {
        getAllMovies()
    }, [])


    return (
        <div className='MainPage'>
            <button onClick={handleClick}>count is {count}</button>
            <button onClick={handleClickWithValue}>count is {count}</button>
            <div>numbers of dogs fetched : {data.length}
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>picurte</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((breed) =>
                            <tr key={breed.id}>
                                <td>{breed.name}</td>
                                <td><img src={breed.image.url} /></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

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
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
        </div>


    )
}

export default MainPage