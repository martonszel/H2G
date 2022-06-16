import './App.css';
import { useState, useEffect } from "react";
import SearchIcon from "./search.svg";
import ClassBased from './pages/ClassBased';
import Functional from './pages/Functional';

const API_URL = 'https://gateway.marvel.com/v1/public/characters'
const API_KEY = '&apikey=7fb70a9709792d94b28b122a317fe87f'


const App: React.FC = () => {

  const [characters, setCharacters] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const getAllCharacters = async () => {
    const response = await fetch(`${API_URL}?${API_KEY}`)
    const data = await response.json()

    setCharacters(data.data.results)
  }

  /*
  const getAllCharacters = async () => {
    const response = await fetch(`${API_URL}?limit=25${API_KEY}`)
    const data = await response.json()

    const charactersArray = []

    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        const character = {
          id: key,
          ...data[key]
        }
        charactersArray.push(character)
      }
    }


    setCharacters(charactersArray)
  }
  */

  const searchCharacter = async (name: string) => {

    const response = await fetch(`${API_URL}?name=${name}${API_KEY}`)
    const data = await response.json()

    setCharacters(data.data.results)
  }

  useEffect(() => {
    getAllCharacters()
  }, [])

  return (
    <div className="App">
      <h1>Főoldal</h1>
      <div className="search">
        <input placeholder='Search for characters...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <img src={SearchIcon} alt="search" onClick={() => searchCharacter(searchTerm)} />
      </div>
      <ClassBased marvelChar={characters} ></ClassBased>
      <Functional marvelChar={characters} ></Functional>
    </div>
  );
}

export default App;
