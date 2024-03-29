import { configureStore } from '@reduxjs/toolkit'
import MovieReducer from '../features/movie-slice'
import UserReducer from '../features/user-slice'
import { apiSlice } from '../features/movie-api-slice';

export const store = configureStore({
    reducer: {
        movie: MovieReducer,
        user: UserReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware)
    },
}
);

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>