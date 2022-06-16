import { useState, useEffect } from "react";
import CharacterList from '../components/CharacterList';
import SearchIcon from "../search.svg";

type Props = {
    apiUrl: string;
    apiKey: string;
}

const Functional: React.FC<Props> = ({ apiUrl, apiKey }) => {

    const [characters, setCharacters] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const getAllCharacters = async () => {
        const response = await fetch(`${apiUrl}?${apiKey}`)
        const data = await response.json()

        setCharacters(data.data.results)
    }

    const searchCharacter = async (name: string) => {

        const response = await fetch(`${apiUrl}?name=${name}${apiKey}`)
        const data = await response.json()

        setCharacters(data.data.results)
    }

    useEffect(() => {
        getAllCharacters()
    }, [])


    return (
        <div className='funcContainer'>
            <h1>Functional</h1>
            <div className="searchContainer">
                <div className="search">
                    <input placeholder='Search for characters...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <img src={SearchIcon} alt="search" onClick={() => searchCharacter(searchTerm)} />
                </div>
            </div>

            <CharacterList marvelChar={characters} ></CharacterList>

        </div>
    )
}

export default Functional