import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    email: '',
    password: ''
}

const LoginReducer = createSlice({
    name: 'Login',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<{ email: string }>) => {
            console.log("dsdsds")
            state.email = action.payload.email
        },
        setPassword: (state, action: PayloadAction<{ password: string }>) => {
            state.password = action.payload.password
        }
    }
})

export const { setEmail, setPassword } = LoginReducer.actions;
export default LoginReducer.reducer