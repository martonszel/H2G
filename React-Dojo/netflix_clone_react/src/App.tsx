
import './App.css';
import { useState } from "react";
import Footer from './components/Footer';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import Login from './pages/Login';


const App: React.FC = () => {

  // eslint-disable-next-line
  const [isLoggedIn, setisLoggedIn] = useState<boolean>(true)

  return (
    <div className="App" >

      {
        isLoggedIn ? (
          <div className="container">
            <Header />
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
