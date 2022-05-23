import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {current_page_listings} from '../../reducers/listingReducer';
import classes from './pagination.module.css'



const Pagination =()=>{

    //const {listing} = useSelector(state => state.listings)
    const listing =[]
    const dispatch = useDispatch()
    
    const [currentPage, setCurrentPage] = useState(1);
    const [listingPerPage, setListingPerPage] = useState(6);

    const [isActive, setIsActive] = useState(1);

    //
    const pages = [
    { id: 1, text: "LI-1" },
    { id: 2, text: "LI-2" },
    { id: 3, text: "LI-3" },
    { id: 4, text: "LI-4" },
    { id: 5, text: "LI-1" },
    { id: 6, text: "LI-2" },
    { id: 7, text: "LI-3" },
    { id: 8, text: "LI-4" }
  ];
    //
    const indexOfLastListing = currentPage * listingPerPage
    const indexOfFirstListing = indexOfLastListing - listingPerPage
    const currentListings = listing.slice(indexOfFirstListing, indexOfLastListing)

  
    // dispatch is only called when the currentListing is changed
    useEffect(()=>{
        dispatch(current_page_listings(currentListings))

    }, [currentListings, currentPage, dispatch])

    // to get the previous page
    const previousPage =()=>{
        if (isActive > 1){
            setIsActive(isActive - 1)
        }else{
            setIsActive(1)
        }
    }

    // to get the next page
    const nextPage =()=>{
        if (isActive <=  pages.length-1){
            setIsActive(isActive + 1)
        }else{
            setIsActive(pages.length)
        }
    }


    return (
        <main className = {classes.pagination}>
            <section className = {classes.pagination__wrapper}>
                <div className={classes.pagination__row}>
                    <div className={classes.prev_holder}>
                        <button className={classes.prev} onClick ={previousPage}>Prev</button>
                    </div>
                    <ul className={classes.page_holder}>
                        {pages.map(page =>
                            <li onClick={()=>{setIsActive(page.id)}}
                                className={isActive === page.id? `${classes.page} ${classes.active}` : `${classes.page}`}>
                                {page.id}
                            </li>
                        )}
                    </ul>
                    <div className={classes.prev_holder}>
                        <button className={classes.next} onClick ={nextPage}>Next</button>
                    </div>
                </div>
            </section>
        </main>
    )
}


export default Pagination