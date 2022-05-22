
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    listings: [],
    pageListing: [],
    page: 0
}

const listingSlice = createSlice({
    name: "listing",
    initialState: initialState,
    reducers:{
        getListing:(state, action)=>{

            // get the data returned by axios
            // push it to the listings array in the state

            const listings = action.payload.data
            listings.forEach(listing =>{
                state.listings.push(listing)
            })
        },

        search_listings:(state, action)=>{
            // update the listing with the data returned by axios
            // push it to the listings array in the state

            state.listings = action.payload;
            state.loading = true
        }
    }
})

export const {getListing} = listingSlice.actions
export default listingSlice.reducer