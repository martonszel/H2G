
import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type Props = {
    apiUrl: string;
    apiKey: string;
}

type State = {
    characters: any[];
}

export default class ClassBased extends React.Component<Props, State> {

    state: State = {
        characters: [],
    }

    componentDidMount() {
        this.getAllCharacters()
    }

    getAllCharacters = async () => {
        const response = await fetch(`${this.props.apiUrl}?limit=21?${this.props.apiKey}`)
        const data = await response.json()

        this.setState({ characters: data.data.results });
        console.log(this.state.characters);
    }

    render() {
        return (
            <div className='classBased'>
                <h1>Classbased</h1>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {this.state.characters.map((char) =>
                        <Grid item xs={2} sm={4} md={4} key={char.id} >
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={char.thumbnail.path + '.' + char.thumbnail.extension}
                                    alt={char.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" >
                                        {char.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" height="10em" >
                                        {char.description.length > 0 ? char.description : 'no description'}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small"><a href={char.urls[0].url} target="_blank">Learn more</a></Button>
                                </CardActions>
                            </Card>
                        </Grid>)}
                </Grid>
            </div >
        )
    }
}