import React from 'react'
import Card from './Card'
import classes from './CharacterItem.module.css'

type Props = {
    id: number
    name: string,
    image: string,
    description: string
}

const CharacterItem: React.FC<Props> = ({ id, name, description, image }) => {

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.parent}>
                    <div className={classes.div1}> <p>{name}</p> </div>
                    <div className={classes.image}> <img src={image} alt={name} /></div>
                    <div className={classes.div3}> <p>{description.length > 0 ? description : 'no description'}</p> </div>
                </div>
            </Card>

        </li>
    )
}

export default CharacterItem