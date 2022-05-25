
import classes from './vendorAddress.module.css'

const VendorAddress =()=>{
    return (
        <section className = {classes.vendorAddress}>
            <h2>Rafi Meals</h2>
            <p>Nigeria</p>
            <div className = {classes.address}>
                <i className ="fa-solid fa-location-dot"></i>
                <p>308 Murtala Muhammad Way, Wuse, Abuja, Nigeria</p>
            </div>
            <div className = {classes.error}>
                <i class="fa-solid fa-circle-exclamation"></i>
                <p>RESTAURANT CLOSED</p>
            </div>
        </section>
    )
}

export default VendorAddress