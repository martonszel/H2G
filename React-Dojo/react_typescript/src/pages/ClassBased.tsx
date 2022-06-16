
import React from 'react'

type Props = {
    marvelChar: string[];
}

type State = {
    count: number;
}

export default class ClassBased extends React.Component<Props, State> {

    state = {
        count: 0,
    }

    increment = (number: number) => {
        this.setState((state) => ({
            count: state.count + number,
        }));
    };

    render() {
        return (
            <div>
                <h1>Classbased</h1>

                <p> {this.state.count}</p>

                <button onClick={() => this.increment(1)}> +</button>
                <button onClick={() => this.increment(-1)}> -</button>
            </div>
        )
    }
}