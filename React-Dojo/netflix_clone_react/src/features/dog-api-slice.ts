import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_KEY = '1fff5597-b2ed-4056-a6c3-0d7c87a9e698'

interface Breed {
    id: string,
    name: string,
    image: {
        url: string
    }
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.thedogapi.com/v1',
        prepareHeaders(headers) {
            headers.set('x-api-key', API_KEY)
            return headers
        },
    }),
    endpoints(builder) {
        return {
            fetchBreeds: builder.query<Breed[], number | void>({
                query(limit = 10) {
                    return `/breeds?limit=${limit}`
                }
            })
        }
    },

})

export const { useFetchBreedsQuery } = apiSlice