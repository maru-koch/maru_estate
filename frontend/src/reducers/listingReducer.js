
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    listings: [],
    pageListings: [],
    page: 0,
    loading: false
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
        },

        current_page_listings:(state, action)=>{
            // get the listing for the current page
            // push it to the pageListings array in the state
            // access it throught the PropertyListings component for display

            // const page_listings = action.payload.data
            // page_listings.forEach(listing =>{
            //     state.pageListings.push(listing)
            // })
        }
    }
})

export const {getListing, search_listings, current_page_listings} = listingSlice.actions
export default listingSlice.reducer