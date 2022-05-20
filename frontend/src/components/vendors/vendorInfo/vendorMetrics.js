
import classes from './vendorMetrics.module.css'
import SectionWrapper from '../../../UI/section-wrapper'

const VendorMetrics =()=>{
    return (
        <SectionWrapper style ={classes.metricsHolder}>
            <div className={classes.metrics}>
                <h5>221</h5>
                <p>REVIEWS</p>
            </div>
            <div className={classes.metrics}>
                <h5>4.5</h5>
                <p>Ratings</p>
            </div>
            <div className={classes.metrics}>
                <h5>PAYMENT</h5>
                <p>ONLINE PAYMENT</p>
            </div>
        </SectionWrapper>
    )
}

export default VendorMetrics