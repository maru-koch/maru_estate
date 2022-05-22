import { useSelector } from '@reduxjs/toolkit'
import classes from './propertylisting.module.css'
import Loader from 'react-loader-spinner'

const PropertyListings =()=>{

    // this component does nothing but to display the current page listings

    const {loading, pageListings} = useSelector(state => state.listing)

    return (
        <main className = "propertyListing">
            <section className = {classes.listing__pagination}>
                <div className="row">
                    {
                        loading? 
                        <Loader/>:
                        <section className ={classes.listing__container}>
                            {pageListings.map()}
                        </section>
                    }
                </div>
            </section>
        </main>
    )
}


export default PropertyListings