
import React from 'react'

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
        const response = await fetch(`${this.props.apiUrl}?${this.props.apiKey}`)
        const data = await response.json()

        this.setState({ characters: data.data.results });
        console.log(this.state.characters);
    }

    render() {
        return (
            <div className='classBased'>
                <h1>Classbased</h1>

                <div>
                    <ul style={{ listStyleType: "none" }}>
                        {this.state.characters.map((char) => (
                            <li key={char.id} >
                                <div style={{ padding: '1em', color: 'white' }}>
                                    <div > <p>{char.name}</p> </div>
                                    <div > <img src={char.thumbnail.path + '.' + char.thumbnail.extension} alt={char.name} style={{ width: '10em' }} /></div>
                                    <div > <p style={{ fontSize: '1.5em' }}>{char.description.length > 0 ? char.description : 'no description'} </p> </div>
                                </div>
                            </li>
                        )
                        )}
                    </ul>
                </div>
            </div >
        )
    }
}