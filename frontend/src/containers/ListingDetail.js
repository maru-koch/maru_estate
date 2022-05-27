import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector} from 'react-redux'
import { listing_detail_api } from '../services/api'
import RealtorProfile from '../components/Realtor/realtorProfile'
import classes from '../components/ListingDetail/listingDetail.module.css'



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
        <main className ={classes.listingDetail}>
            <section  className ={classes.listingDetail__realtorHolder}>
                <RealtorProfile/>
            </section>
            <section className ={classes.listingDetail__propertyHolder}>
                <div>
                    <li>
                        <div>
                            <p>{listing.sale_type}</p>
                            <h1>{listing.title}</h1>
                        </div>
                        <div>
                            <img src ={listing.photo_main} alt ={listing.title}/>
                        </div>
                       <div>
                           <img src ={listing.photo_1} alt ={listing.title}/>
                            <img src ={listing.photo_2} alt ={listing.title}/>
                            <img src ={listing.photo_3} alt ={listing.title}/>
                       </div>
                       <div>
                            <p>{listing.home_type}</p>
                            <p>{listing.sqft}</p>
                            <p>{listing.bedroom}</p>
                            <p>{listing.bathroom}</p>
                       </div>
                       <div>
                            <p>{listing.price}</p>
                            <p>{listing.realtor}</p>
                            <p>{listing.address}</p>
                            <p>{listing.city}</p>
                            <p>{listing.state}</p>
                       </div>
                       <div>
                            <p>{listing.description}</p>
                       </div>
                       <div>
                           <p>Add to favorite</p>
                           <p>Share</p>
                       </div>
                    </li>
                </div>
            </section>
        </main>
    )
}

export default ListingDetail