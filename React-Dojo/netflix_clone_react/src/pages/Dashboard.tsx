import Footer from '../components/Footer';
import Header from '../components/Header';
import MainPage from '../components/MainPage';
import MovieDetails from '../components/MovieDetails';
import { useAppSelector } from '../store/hooks'
import { useFetchMoviesQuery } from '../features/movie-api-slice';

const Dashboard = () => {

    const oneMovie = useAppSelector((state) => state.movie.oneMovie)
    const { data = [], isFetching } = useFetchMoviesQuery()

    return (
        <div>
            {oneMovie.id &&
                <MovieDetails />
            }
            {!oneMovie.id &&
                <Header />
            }
            <MainPage />
            <Footer />
        </div>
    )
}

export default Dashboard