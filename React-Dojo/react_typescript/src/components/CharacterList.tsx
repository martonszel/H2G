import React from 'react'
import CharacterItem from './CharacterItem';
import classes from './CharacterList.module.css'

type Props = {
    marvelChar: any[];
}

const CharacterList: React.FC<Props> = ({ marvelChar }) => {
    console.log(marvelChar);


    return (
        <ul className={classes.list} >
            {marvelChar.map((char) =>
                < CharacterItem
                    key={char.id}
                    id={char.id}
                    image={char.thumbnail.path + '.' + char.thumbnail.extension}
                    name={char.name}
                    description={char.description} />)}
        </ul>

    )
}

export default CharacterList