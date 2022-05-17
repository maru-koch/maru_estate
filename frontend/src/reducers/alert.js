import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    is_successful: false,
    testing: "alert testing"
}
const alertSlice = createSlice({
    name: "alert",
    initiaState: initialState,
    actions: {
        message_success:(state, action)=>{
            if (action.payload.res === 'fail'){
                state.is_successful = true
            }else{
                state.is_successful = false
            }
        }, 
    }
})

export const {message_success} = alertSlice.actions
export default alertSlice.reducer
