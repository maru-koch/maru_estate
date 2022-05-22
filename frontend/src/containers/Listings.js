import { useState, useEffect} from 'react'
import { listing } from '../services/api'
import {Link} from 'react-router-dom'
import SectionContainer from '../UI/section-container'
import SectionWrapper from '../UI/section-wrapper'



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
    <div>
        <Search/>
        <SearchOptions/>
        <SectionContainer>
            <SectionWrapper>
                <SideBar/>
                <PropertyListings/>
            </SectionWrapper>
        </SectionContainer>
    </div>
    )
}

export default Listing