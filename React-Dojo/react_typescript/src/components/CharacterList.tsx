import React from 'react'
import CharacterItem from './CharacterItem';
import classes from './CharacterList.module.css'
import Grid from '@mui/material/Grid';
type Props = {
    marvelChar: any[];
}

const CharacterList: React.FC<Props> = ({ marvelChar }) => {

    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {marvelChar.map((char) =>
                <Grid item xs={2} sm={4} md={4} key={char.id} >
                    < CharacterItem
                        key={char.id}
                        id={char.id}
                        image={char.thumbnail.path + '.' + char.thumbnail.extension}
                        name={char.name}
                        description={char.description}
                        url={char.urls[0].url} />
                </Grid>)}
        </Grid>
    )
}

export default CharacterList