import classes from './propertylisting.module.css'
import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {current_page_listings} from '../../reducers/listingReducer'



const Pagination =()=>{

    const {listing} = useSelector(state => state.listings)
    const dispatch = useDispatch()
    
    const [currentPage, setCurrentPage] = useState(1);
    const [listingPerPage, setListingPerPage] = useState(6);
    const [active, setActive] = useState(1);

    //
    const indexOfLastListing = currentPage * listingPerPage
    const indexOfFirstListing = indexOfLastListing - listingPerPage
    const currentListings = listing.slice(indexOfFirstListing, indexOfLastListing)
  
    // dispatch is only called when the currentListing is changed
    useEffect(()=>{
        dispatch(current_page_listings(currentListings))
        setActive(currentPage + 1)

    }, [currentListings, currentPage, dispatch])

    // to get the previous page
    const previousPage =()=>{
        if (currentPage >= 1){
            setCurrentPage(currentPage - 1)
            setActive(currentPage - 1)
        }else{
            setCurrentPage(1)
        }
    }

    // to get the next page
    const nextPage =()=>{
        const last_page = Math.ceil(listing.length/listingPerPage)
        if (currentPage <= last_page ){
            setCurrentPage(currentPage + 1)
        }else{
            setCurrentPage(last_page)
        }
    }


    return (
        <main className = {classes.page}>
            <section className = {classes.listing__pagination}>
                <div className={classes.row}>
                    <div className={classes.prev_holder}>
                        <button className={classes.prev} onClick ={previousPage}>Prev</button>
                    </div>
                    <div className={classes.page_holder}>
                        <div className={classes.page}>1</div>
                        <div className={classes.page}>2</div>
                        <div className={classes.page}>3</div>
                    </div>
                    <div className={classes.prev_holder}>
                        <button className={classes.next} onClick ={nextPage}>Next</button>
                    </div>
                </div>
            </section>
        </main>
    )
}


export default Pagination