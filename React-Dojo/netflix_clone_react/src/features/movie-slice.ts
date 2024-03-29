import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'
import { Movie } from '../models/Movies';
import { apiSlice } from "./movie-api-slice";

interface MovieState {
    movies: Movie[]
    filteredMovies: Movie[]
    oneMovie: Movie,
    sortOptions: {
        sortKey: string;
        sortOrder: string;
    };
    filterOptions: {
        genre: string;
    };
    searchedMovie: string,
}

const initialState: MovieState = {
    movies: [],
    oneMovie: { id: '', title: '', release_date: 0, genre: [], thumbnail: '', movie_url: '', rating: 0, runtime: 0, overview: '' },
    filteredMovies: [],
    sortOptions: {
        sortKey: '',
        sortOrder: ''
    },
    filterOptions: {
        genre: ''
    },
    searchedMovie: "",

}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        getOneMovie(state, action: PayloadAction<Movie>) {
            state.oneMovie = action.payload
        },

        reset(state) {
            state.oneMovie = { id: '', title: '', release_date: 0, genre: [], thumbnail: '', movie_url: '', rating: 0, runtime: 0, overview: '' }
        },

        searchMovie(state, action: PayloadAction<string>) {
            action.payload === '' ? state.filteredMovies = [] :
                state.filteredMovies = state.movies.filter((e) => e.title.toLocaleLowerCase() === action.payload.toLocaleLowerCase())
        },

        filterByGenre(state, action: PayloadAction<string>) {

            if (action.payload === 'All') {
                state.filteredMovies = []
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

        setGenreFilter: (state, action) => {
            state.filterOptions.genre = action.payload;
        },
        setSortParams: (state, action) => {
            console.log(action.payload);
            state.sortOptions.sortKey = action.payload;
        },

        setSearchedMovie: (state, action) => {
            state.searchedMovie = action.payload;
        },

        sortBy(state, action: PayloadAction<string>) {
            if (action.payload === 'release_date') {
                console.log(current(state));

                state.filteredMovies.length > 0 ?
                    state.filteredMovies.sort((a, b) => a.release_date - b.release_date) :
                    state.movies.sort((a, b) => a.release_date - b.release_date)

            } else if (action.payload === 'rating') {
                state.filteredMovies.length > 0 ?
                    state.filteredMovies.sort((a, b) => a.rating - b.rating) :
                    state.movies.sort((a, b) => a.rating - b.rating)

            } else if (action.payload === 'title') {
                state.filteredMovies.length > 0 ?

                    state.filteredMovies.sort((a, b) => {
                        const titleA = a.title.toUpperCase();
                        const titleB = b.title.toUpperCase();
                        if (titleA < titleB) {
                            return -1;
                        }
                        if (titleA > titleB) {
                            return 1;
                        }
                        // names must be equal
                        return 0;
                    }) :
                    state.movies.sort((a, b) => {
                        const titleA = a.title.toUpperCase();
                        const titleB = b.title.toUpperCase();
                        if (titleA < titleB) {
                            return -1;
                        }
                        if (titleA > titleB) {
                            return 1;
                        }
                        // names must be equal
                        return 0;
                    })

            }

        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            apiSlice.endpoints.fetchMovies.matchFulfilled,
            (state, { payload }) => {
                state.movies = payload // mappelni 
            }
        )
    },
})

export const { getOneMovie, reset, filterByGenre, sortBy, searchMovie, setGenreFilter, setSortParams, setSearchedMovie } = movieSlice.actions
export default movieSlice.reducer