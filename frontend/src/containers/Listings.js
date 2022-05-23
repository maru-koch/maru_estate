import { useState, useEffect} from 'react'
import { listing } from '../services/api'
import SectionContainer from '../UI/section-container'
import SectionWrapper from '../UI/section-wrapper'
import PropertyListings from '../components/Listing/propertyListing'
import Pagination from '../components/Listing/pagination'
import ListingForm from '../components/Listing/listingForm'
import Search from '../components/Listing/searchListing'
import SideBar from '../components/Listing/sideBar'
import classes from '../components/Listing/listing.module.css'



const Listing = ()=>{

    // this component gets the listed properties from the api
    // save it in state variable (getListings)
    // and outputs it on the user interface

    const [listings, setListings] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    const listingHandler = async ()=>{
        const properties = await listing()
        setListings(properties)
    }

    useEffect(()=>{
        // to prevent fetching the data each time the page reloads
        listingHandler()
        
    }, [])

    return (
    <main className = {classes.listings__main}>
        <div className ={classes.listings__searchPanel}>
            <Search/>
            <ListingForm/>
        </div>
        <SectionContainer>
            <SectionWrapper style = {classes.listings__wrapper}>
                <SideBar/>
                <div className = {classes.listings__property}>
                    <PropertyListings/>
                </div>
            </SectionWrapper>
        </SectionContainer>
    </main>
    )
}

export default Listing