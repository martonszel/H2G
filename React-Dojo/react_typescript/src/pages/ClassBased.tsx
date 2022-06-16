
import React from 'react'

type Props = {
    message?: string;
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
                <div>
                    {this.props.message} {this.state.count}
                </div>
                <button onClick={() => this.increment(1)}> +</button>
                <button onClick={() => this.increment(-1)}> -</button>
            </div>
        )
    }
}