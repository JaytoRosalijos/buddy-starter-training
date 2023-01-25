import { createSlice, } from '@reduxjs/toolkit'

interface User {
    email: string,
}
interface UserState {
    user: User,
    isLoggedIn: boolean,
};

const initialState: UserState = {
    user: { email: "john.doe@vananaz.com" },
    isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    login: (state, action) => {
        // TODO: add login logic
    },
    logout: (state, action) => {
        // TODO: add logout logic
    }
  },
})

export const { login, logout, } = userSlice.actions

export default userSlice.reducer;
