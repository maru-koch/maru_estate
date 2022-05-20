import { useState, useEffect} from 'react'
import { listing } from '../services/api'
import {Link} from 'react-router-dom'



const Listing = ()=>{

    // this component gets the listed properties from the api
    // save it in state variable (getListings)
    // and outputs it on the user interface

    const [listings, getListings] = useState([])

    const listingHandler = async ()=>{
        const properties = await listing()
        getListings(properties)
    }

    useEffect(()=>{
        // to prevent fetching the data each time the page reloads
        listingHandler()
        
    }, [])

    return (
    <div>
        <h1>Property Listing</h1>
        <button onClick ={listingHandler}>Get listing</button>
        { listings.map((listing, idx)=>(
            <div key = {idx}>
                <img src = {listing.photo_main} alt = {listing.title}/>
                <Link to = {`/listings/${listing.id}`}><h1>{listing.title}</h1></Link>
                <p>{listing.address}</p>
                <p>{listing.city}</p>
                <p>{listing.state}</p>
                <p>{listing.price}</p>
            </div>
        ))}
    </div>
    )
}

export default Listing