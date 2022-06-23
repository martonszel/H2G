import * as React from 'react';
import classes from './CharacterItem.module.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type Props = {
    id: number
    name: string,
    image: string,
    description: string
    url: string
}

const CharacterItem: React.FC<Props> = ({ id, name, description, image, url }) => {


    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="250"
                image={image}
                alt={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" >
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary" height="10em" className={classes.desc}>
                    {description.length > 0 ? description : 'no description'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"><a href={url} target="_blank">Learn more</a></Button>
            </CardActions>
        </Card>
    )
}

export default CharacterItem