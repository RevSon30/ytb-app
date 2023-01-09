import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: '',
    password: ''
}

const LoginReducer = createSlice({
    name: 'Login',
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload.email
        },
        setPassword: (state, action) => {
            state.password = action.payload.password
        }
    }
})

export const { setEmail, setPassword } = LoginReducer.actions;
export default LoginReducer.reducer