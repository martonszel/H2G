import React from 'react'
import MovieCard from '../components/MovieCard';
import MovieTabs from '../components/MovieTabs';

import { useFetchMoviesQuery } from '../features/movie-api-slice';

type Props = {}

const MainPage: React.FC = (props: Props) => {

    const { data = [], isFetching } = useFetchMoviesQuery()


    return (
        <div className='MainPage'>

            <MovieTabs />
            {
                data?.length > 0 ? (
                    <div>
                        <p className="moviesFound"> <strong>{data.length}</strong> movies found</p>
                        <div className="movieContainer">
                            {data.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
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