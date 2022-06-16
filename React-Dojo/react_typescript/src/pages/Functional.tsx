import React, { useState } from 'react'
import CharacterList from '../components/CharacterList';

type Props = {
    marvelChar: any;
}

const Functional: React.FC<Props> = ({ marvelChar }) => {

    const [number, setNumber] = useState<number>(5)


    return (
        <div className='funcContainer'>
            <h1>Functional</h1>

            <CharacterList marvelChar={marvelChar} ></CharacterList>

        </div>
    )
}

export default Functional