
import ListingForm from './listingForm'
import Pagination from './pagination'
import classes from './propertylisting.module.css'
import {useState} from 'react';



const PropertyListings =()=>{

    const [listings, setListings] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [listingPerPage, setListingPerPage] = useState(3);
    const [active, setActive] = useState(1);

    return (
        <main className = "propertyListing">
            <section className = {classes.listing__pagination}>
                <div className="row">
                    {
                        
                        
                    }
                </div>
            </section>
        </main>
    )
}


export default PropertyListings