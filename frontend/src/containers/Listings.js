import { useState } from 'react'
import { listing } from '../services/api'

const Listing =()=>{
    const [listings, getListings] = useState([])

    const getListing =()=>{
        const properties = listing()
        getListings(properties)
        console.log(listings)
    }

    return (
    <div>
        <h1>Property Listing</h1>
        <button onClick ={getListing}></button>
    </div>
    )
}

export default Listing