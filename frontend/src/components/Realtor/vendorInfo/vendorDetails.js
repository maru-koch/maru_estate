
import classes from './vendorDetails.module.css'
import SectionContainer from '../../../UI/section-container'
import VendorMetrics from './vendorMetrics'
import VendorAddress from './vendorAddress'

const VendorDetails =()=>{
    return (
        <div className ={classes.container}>
            <VendorAddress/>
            <VendorMetrics/>
        </div>
    )
}

export default VendorDetails