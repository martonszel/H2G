import { configureStore } from '@reduxjs/toolkit'
import MovieReducer from '../features/movie-slice'

export const store = configureStore({
    reducer: { movie: MovieReducer }
}
);

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>