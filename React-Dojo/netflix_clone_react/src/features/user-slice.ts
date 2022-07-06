import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'
import { User } from '../models/User';
import { apiSlice } from "./movie-api-slice";


interface UserState {
    user: User | null
}

const initialState: UserState = {
    user: null,
}

export const userSlice = createSlice({
    initialState,
    name: 'userSlice',
    reducers: {
        logout: () => initialState,
        setUser: (state, action: PayloadAction<User>) => {
            console.log(action.payload);

            state.user = action.payload;
        },
    },
});

export default userSlice.reducer;

export const { logout, setUser } = userSlice.actions;