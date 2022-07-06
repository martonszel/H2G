import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Movie } from '../models/Movies';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: ' http://localhost:8000',
    }),
    tagTypes: ['Movies'],
    endpoints(builder) {
        return {
            fetchMovies: builder.query<Movie[], void>({
                query() {
                    return `/movies`
                },
                providesTags: ['Movies'],
            }),
            addMovies: builder.mutation({
                query: (movie) => ({
                    url: "/movies",
                    method: "POST",
                    body: movie
                }),
                invalidatesTags: ['Movies'],
            }),
            loginUser: builder.mutation({
                query: (data) => ({
                    url: "/login",
                    method: "POST",
                    body: data
                }),
            }),

        }
    },
})

export const { useFetchMoviesQuery, useAddMoviesMutation, useLoginUserMutation } = apiSlice