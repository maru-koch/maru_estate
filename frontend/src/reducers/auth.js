
import { createSlice } from "@reduxjs/toolkit";

const initiaState ={
    isAuthenticated: false,
    isLoggedIn: false,
    testing: "authentication testing"
}

const authSlice = createSlice({
    name : "auth",
    initiaState : initiaState,
    reducers:{
        login: (state, action)=>{
            state.isLoggedIn = true;
        },

        logout: (state, action)=>{
            state.isLoggedIn = false;
        },

    }
  }  
)

export const {login, logout} = authSlice.actions
export default authSlice.reducer