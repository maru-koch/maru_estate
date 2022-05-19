import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../reducers/authReducer'
import alertReducer from '../reducers/alertReducer'
import listingReducer from '../reducers/listingReducer'

const store = configureStore({
    reducer:{
        auth: authReducer,
        alert: alertReducer,
        listing: listingReducer
    }

})

export default store

