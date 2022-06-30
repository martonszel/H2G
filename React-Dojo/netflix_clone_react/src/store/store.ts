import { configureStore } from '@reduxjs/toolkit'
import MovieReducer from '../features/movie-slice'
import { apiSlice } from '../features/dog-api-slice';

export const store = configureStore({
    reducer: {
        movie: MovieReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware)
    },
}
);

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>