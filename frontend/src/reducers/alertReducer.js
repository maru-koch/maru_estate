import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    is_successful: false,
    testing: "alert testing"
}

const alertSlice = createSlice({
    name: "alert",
    initialState: initialState,
    reducers: {
        setAlert:(state, action)=>{
            if (action.payload.response === 'success'){
                state.is_successful = true;
            }else{
                state.is_successful = false;
            }
        }
    }
})

export const {setAlert} = alertSlice.actions
export default alertSlice.reducer
