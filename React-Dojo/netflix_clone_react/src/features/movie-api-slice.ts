import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


interface Movie {
    id: string,
    title: string,
    release_date: number,
    genre: string[],
    thumbnail: string,
    movie_url: string,
    rating: number,
    runtime: string,
    overview: string
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: ' http://localhost:8000',
    }),
    endpoints(builder) {
        return {
            fetchMovies: builder.query<Movie[], void>({
                query() {
                    return `/movies`
                }
            })
        }
    },




})

export const { useFetchMoviesQuery } = apiSlice