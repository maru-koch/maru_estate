import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector} from 'react-redux'
import { listing_detail_api } from '../services/api'



const ListingDetail =()=>{
    const {id} = useParams()
    const {token} = useSelector(state => state.auth)
    const [listing, setListingDetail] = useState({})

    const get_listing = async()=>{
        const response = await  listing_detail_api(id, token)
        setListingDetail(response.data)
        console.log("listing:",listing.title)
    }

    useEffect( ()=>{
        get_listing()
    }, [])

    return (
    <div>
        <li>
            <img src ={listing.photo_main} alt ={listing.title}/>
            <h1>{listing.title}</h1>
            <p>{listing.description}</p>
            <p>{listing.price}</p>
            <p>{listing.realtor}</p>
            <p>{listing.address}</p>
            <p>{listing.city}</p>
            <p>{listing.state}</p>
            <p>{listing.home_type}</p>
            <p>{listing.sale_type}</p>
            <p>{listing.sqft}</p>
            <p>{listing.bedroom}</p>
            <p>{listing.bathroom}</p>
            <img src ={listing.photo_1} alt ={listing.title}/>
            <img src ={listing.photo_2} alt ={listing.title}/>
            <img src ={listing.photo_3} alt ={listing.title}/>
        </li>
    </div>
    )
}

export default ListingDetail