import './App.css';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import ClassBased from './pages/ClassBased';
import Functional from './pages/Functional';

const App: React.FC = () => {

  const API_URL = 'https://gateway.marvel.com/v1/public/characters'
  const API_KEY = '&apikey=7fb70a9709792d94b28b122a317fe87f'

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to="/functional" />} />
        <Route path="/class-based" element={<ClassBased apiKey={API_KEY} apiUrl={API_URL} />}></Route>
        <Route path="/functional" element={<Functional apiKey={API_KEY} apiUrl={API_URL} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
