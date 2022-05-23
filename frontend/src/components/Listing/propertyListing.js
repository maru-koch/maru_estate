import {useState} from 'react'
import { useSelector } from 'react-redux'
import soupImage1 from '../../assets/images/estate_1.jpg'
import soupImage2 from '../../assets/images/estate_2.jpg'
import soupImage3 from '../../assets/images/estate_3.jpg'
import soupImage4 from '../../assets/images/estate_4.jpg'
import classes from './propertylisting.module.css'
import ListingCard from '../Home/listingCard'
import Pagination from './pagination'

  const listings =[
        {
            name: "Duplex",
            image: soupImage1,
            price: 2000,
            description:"Jollof Rice is a generic meal for all Nigerians. spans all economic spectrum. It unites the stomach of different tribe-men in one bowel",
            address: "Lekki",
            city: "port Harcourt"

        }, 
        {
            name: "Condo",
            image: soupImage2,
            price: 5000,
            description:"Efor, as commonly known amongst the Yorubas, is a western Delicacy that could make a man blitz more fufu than he could Imagin.",
            address: "Gwarimpa",
            city: "Abuja"
        },
        {
            name: "Single Family",
            image: soupImage3,
            price: 2000,
            description:"Okra soup is an eastern delicacy. primary food of the Igbo tribes. Prepared with seafoods and green veg. A taste will make you a fan",
            address: "Lekki",
            city: "Lagos"
        },
        {
            name: "Duplex",
            image: soupImage4,
            price: 2000,
            description:"Okra soup is an eastern delicacy. primary food of the Igbo tribes. Prepared with seafoods and green veg. A taste will make you a fan",
            address: "Dab Estate",
            city: "Akparaka"
        },
        {
            name: "Duplex",
            image: soupImage1,
            price: 2000,
            description:"Jollof Rice is a generic meal for all Nigerians. spans all economic spectrum. It unites the stomach of different tribe-men in one bowel",
            address: "Lekki",
            city: "port Harcourt"

        }, 
        {
            name: "Condo",
            image: soupImage2,
            price: 5000,
            description:"Efor, as commonly known amongst the Yorubas, is a western Delicacy that could make a man blitz more fufu than he could Imagin.",
            address: "Gwarimpa",
            city: "Abuja"
        },
        {
            name: "Single Family",
            image: soupImage3,
            price: 2000,
            description:"Okra soup is an eastern delicacy. primary food of the Igbo tribes. Prepared with seafoods and green veg. A taste will make you a fan",
            address: "Lekki",
            city: "Lagos"
        },
        {
            name: "Duplex",
            image: soupImage4,
            price: 2000,
            description:"Okra soup is an eastern delicacy. primary food of the Igbo tribes. Prepared with seafoods and green veg. A taste will make you a fan",
            address: "Dab Estate",
            city: "Akparaka"
        }



    
    ]
    

const PropertyListings =()=>{

    // this component does nothing but to display the current page listings

    // const {loading, pageListings} = useSelector(state => state.listing)

    const [loading, setLoading] = useState(false)
    const [pageListings, setPageListing] = useState('')

    return (
        <main className = {classes.listings__property}>
            <section className = {classes.listings__wrapper}>
                <section className ={classes.listings__cardHolder}>
                    {listings.map((listing, idx)=>(
                    <ListingCard
                       style ={classes.card} key = {idx} name = {listing.name} image = {listing.image} description = {listing.description} price = {listing.price} address = {listing.address} city = {listing.city}

                    />))}
                    <p>PageListings</p>
                </section>
                <Pagination/>
            </section>
        </main>
    )
}


export default PropertyListings