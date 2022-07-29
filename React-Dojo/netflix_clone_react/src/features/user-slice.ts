import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'
import { User } from '../models/User';
import { apiSlice } from "./movie-api-slice";


interface UserState {
    email: string,
    password: string
}

const initialState: UserState = {
    email: '',
    password: ''
}

export const userSlice = createSlice({
    initialState,
    name: 'userSlice',
    reducers: {
        logout: () => initialState,
        setUser: (state, action: PayloadAction<User>) => {
            console.log(action.payload);

            state.email = action.payload.email;
            state.password = action.payload.password;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            apiSlice.endpoints.loginUser.matchFulfilled,
            (state, { payload }) => {
                state.email = payload.email
                state.password = payload.password
            }
        )
    },
});

export default userSlice.reducer;

export const { logout, setUser } = userSlice.actions;