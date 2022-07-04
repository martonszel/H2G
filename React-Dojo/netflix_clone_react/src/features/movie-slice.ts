import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'
import { Movie } from '../models/Movies';
import { apiSlice } from "./movie-api-slice";

interface MovieState {
    movies: Movie[]
    filteredMovies: Movie[]
    oneMovie: Movie
}

const initialState: MovieState = {
    movies: [],
    oneMovie: { id: '', title: '', release_date: 0, genre: [], thumbnail: '', movie_url: '', rating: 0, runtime: '', overview: '' },
    filteredMovies: []
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        getOneMovie(state, action: PayloadAction<Movie>) {
            state.oneMovie = action.payload
            console.log(state.oneMovie);
        },

        reset(state) {
            state.oneMovie = { id: '', title: '', release_date: 0, genre: [], thumbnail: '', movie_url: '', rating: 0, runtime: '', overview: '' }
        },

        filterByGenre(state, action: PayloadAction<string>) {

            if (action.payload === 'All') {
                state.filteredMovies = []
                console.log(current(state));
            } else if (action.payload === 'Documentary') {
                state.filteredMovies = state.movies.filter((e) => e.genre.includes('Documentary'))
            }
            else if (action.payload === 'Comedy') {
                state.filteredMovies = state.movies.filter((e) => e.genre.includes('Comedy'))
            }
            else if (action.payload === 'Horror') {
                state.filteredMovies = state.movies.filter((e) => e.genre.includes('Horror'))
            }
            else if (action.payload === 'Crime') {
                state.filteredMovies = state.movies.filter((e) => e.genre.includes('Crime'))
            }
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            apiSlice.endpoints.fetchMovies.matchFulfilled,
            (state, { payload }) => {
                state.movies = payload
            }
        )
    },
})

export const { getOneMovie, reset, filterByGenre } = movieSlice.actions
export default movieSlice.reducer