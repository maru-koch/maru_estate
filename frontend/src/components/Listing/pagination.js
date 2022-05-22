import ListingForm from './listingForm'
import Pagination from './pagination'
import classes from './propertylisting.module.css'
import {useState} from 'react';



const Pagination =()=>{

    const [listings, setListings] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [listingPerPage, setListingPerPage] = useState(3);
    const [active, setActive] = useState(1);

    //
    const indexOfLastListing = currentPage * listingPerPage
    const indexOfFirstListing = indexOfLastListing - listingPerPage
    const currentListings= listings.slice(indexOfFirstListing, indexOfLastListing)

    const visitPage =(page)=>{
        setCurrentPage(page)
        setActive(page)
    }

    const previousPage =()=>{
        if (currentPage !== 1){
            setCurrentPage(currentPage - 1)
            setActive(currentPage - 1)
        }
    }

    const nextPage =()=>{
        if (currentPage !== Math.ceil(listings.length/3)){
            setCurrentPage(currentPage + 1)
            setActive(currentPage + 1)
        }
    }



    return (
        <main className = {classes.pagination}>
            <section className = {classes.listing__pagination}>
                <div className={classes.row}>
                    <div>
                        <p>Prev</p>
                    </div>
                    <div>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                    </div>
                    <div>
                        <p>Next</p>
                    </div>
                </div>
            </section>
        </main>
    )
}


export default Pagination