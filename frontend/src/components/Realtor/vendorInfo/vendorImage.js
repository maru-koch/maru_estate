
import classes from './vendorDetails.module.css'

const VendorImage =({vendor})=>{
    return (
        <div className ={classes.container}>
            <div className = {classes.vendorImage}>
                <img src ={vendor.img} alt ={vendor.title}/>
            </div>
        </div>
    )
}

export default VendorImage