import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface MovieState {
    value: number
}

const initialState: MovieState = {
    value: 10
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        increment(state) {
            console.log('jajaj');

            state.value++
        },
        incrementWithValue(state, action: PayloadAction<number>) {
            console.log('jajaj');

            state.value += action.payload
        },
        decrement(state) {
            state.value--
        }
    }
})

export const { increment, incrementWithValue, decrement } = movieSlice.actions
export default movieSlice.reducer