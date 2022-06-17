import { useState, useEffect } from "react";
import CharacterList from '../components/CharacterList';
import SearchIcon from "../search.svg";

type Props = {
    apiUrl: string;
    apiKey: string;
}

const Functional: React.FC<Props> = ({ apiUrl, apiKey }) => {

    const [characters, setCharacters] = useState([])
    const [error, setError] = useState<null | Error>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [searchTerm, setSearchTerm] = useState('')

    const getAllCharacters = async () => {

        try {
            const response = await fetch(`${apiUrl}?limit=21?${apiKey}`)
            const data = await response.json()

            setCharacters(data.data.results)
            setIsLoaded(true)
        } catch (error) {
            setIsLoaded(true);
            if (error instanceof Error) {
                setError(error)
            }
        }

    }

    const searchCharacter = async (name: string) => {

        const response = await fetch(`${apiUrl}?name=${name}${apiKey}`)
        const data = await response.json()

        setCharacters(data.data.results)
        setIsLoaded(true);
    }

    useEffect(() => {
        getAllCharacters()
    }, [])


    if (error) {
        return <div>
            <h1> Error: {error.message} </h1>
        </div>
    } else if (!isLoaded) {
        return <div className='classBased'><h1>Loading...</h1></div>
    } else {
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
        );
    }
}

export default Functional