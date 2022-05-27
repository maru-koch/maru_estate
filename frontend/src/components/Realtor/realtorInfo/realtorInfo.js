
import classes from './realtorInfo.module.css'

const VendorAddress =()=>{
    return (
        <section className = {classes.vendorInfo}>
            <h3 className = {classes.name}>Celina Major</h3>
            <p className = {classes.company}>Cela Properties</p>
            <h2 className = {classes.phone_number}>08030425259</h2>
            <div className = {classes.address}>
                <i className ="fa-solid fa-location-dot"></i>
                <p>308 Murtala Muhammad Way, Wuse, Abuja, Nigeria</p>
            </div>
        </section>
    )
}

export default VendorAddress