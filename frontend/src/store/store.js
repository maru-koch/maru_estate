import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../reducers/auth'
import alertReducer from '../reducers/alert'

export const store = configureStore({
    reducer:{
        auth: authReducer,
        alert: alertReducer,
    }

})


