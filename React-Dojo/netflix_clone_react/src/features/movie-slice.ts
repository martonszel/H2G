import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Movie } from '../models/Movies';


interface MovieState {
    movies: Movie[]
    oneMovie: Movie
}

const initialState: MovieState = {
    movies: [],
    oneMovie: { id: '', title: '', release_date: 0, genre: [], thumbnail: '', movie_url: '', rating: 0, runtime: '', overview: '' }
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        getOneMovie(state, action: PayloadAction<Movie>) {
            state.oneMovie = action.payload
            console.log(state.oneMovie);
        },

        reset(state) {
            state.oneMovie = { id: '', title: '', release_date: 0, genre: [], thumbnail: '', movie_url: '', rating: 0, runtime: '', overview: '' }
        },


    }
})

export const { getOneMovie, reset } = movieSlice.actions
export default movieSlice.reducer