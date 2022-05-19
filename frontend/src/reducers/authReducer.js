
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    testing: "authentication testing",
}

const authSlice = createSlice({

    name : "auth",
    initialState: initialState,

    reducers:{
        loggedIn: (state, action)=>{
            const access_token = action.payload.access;
            localStorage.setItem('token', access_token);
            state.isAuthenticated = true;
            state.loading = false;
            state.token = action.payload.access
        },

        login_fail:(state, action)=>{
            localStorage.removeItem('token');
            state.token = null;
            state.isAuthenticated = false;
        },

        logout: (state, action)=>{
            localStorage.removeItem('token');
            state.isAuthenticated = false;
            state.token = null;
            console.log(state.token)
        },

        signup:(state, action)=>{
            state.isLoading = true;
            state.isAuthenticated = false;
        },

        changeText:(state, action)=>{
            state.testing = "Some got pressed"
        }

    }
  }  
)

export const {loggedIn, logout, changeText} = authSlice.actions
export default authSlice.reducer