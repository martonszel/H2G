import React, { useState } from 'react'

type Props = {
    marvelChar: string[];
}

const Functional: React.FC<Props> = (props: Props) => {

    const [number, setNumber] = useState<number>(5)

    return (
        <div>
            <h1>Functional</h1>

            <p>{number}</p>

            <button onClick={() => setNumber(number + 1)}> +</button>
            <button onClick={() => setNumber(number - 1)}> -</button>

        </div>
    )
}

export default Functional