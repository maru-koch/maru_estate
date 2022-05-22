import {Link} from 'react-router-dom'

import Section from '../../UI/section'
import SectionHeader from '../../UI/section-header'
import SectionWrapper from '../../UI/section-wrapper'
import SectionContainer from '../../UI/section-container.js'
import soupImage1 from '../../assets/images/estate_1.jpg'
import soupImage2 from '../../assets/images/estate_2.jpg'
import soupImage3 from '../../assets/images/estate_3.jpg'
import soupImage4 from '../../assets/images/estate_4.jpg'
import classes from './listing-section.module.css'
import ListingCard from './listingCard'

const MealsSection=(props)=>{ 
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
        }


    
    ]
    
    
    return (
    <section>
        <SectionHeader title = "Listed Properties" subtitle = "Find your dream home"/>
        <SectionContainer style = {classes.container}>
            <SectionWrapper style = {classes.wrapper}>
                {listings.map((listing, idx) =><ListingCard key = {idx} name = {listing.name} image = {listing.image} description = {listing.description} price = {listing.price} address = {listing.address} city = {listing.city}/>)}
            </SectionWrapper>
        </SectionContainer>
        <div class = {classes.linkContainer}>
            <Link class = {classes.link} to = "/listings">Explore Complete Menu</Link>
        </div>
    </section>)
}

export default MealsSection