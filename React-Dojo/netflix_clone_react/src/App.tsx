
import './App.css';
import { useState } from "react";
import Footer from './components/Footer';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import MovieDetails from './components/MovieDetails';
import { useAppSelector } from './store/hooks'





const App: React.FC = () => {

  // eslint-disable-next-line
  const [isLoggedIn, setisLoggedIn] = useState<boolean>(true)

  const oneMovie = useAppSelector((state) => state.movie.oneMovie)
  

  return (
    <div className="App" >
      {
        isLoggedIn ? (
          <div className="container">
            {oneMovie.id &&
              <MovieDetails />
            }
            {!oneMovie.id &&
              <Header />
            }

            <MainPage />
            <Footer />
          </div>
        ) : (
          <div className="container">
            <Login />
          </div>
        )
      }
    </div >
  );
}

export default App;
