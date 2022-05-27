
import classes from './realtorMetrics.module.css'
import SectionWrapper from '../../../UI/section-wrapper'

const VendorMetrics =()=>{
    return (
        <SectionWrapper style ={classes.metricsHolder}>
            <div className={classes.metrics}>
                <h5>5</h5>
                <p>bed</p>
            </div>
            <div className={classes.metrics}>
                <h5>4.5</h5>
                <p>bath</p>
            </div>
            <div className={classes.metrics}>
                <h5>2,350</h5>
                <p>sqft</p>
            </div>
            <div className={classes.metrics}>
                <h5>0.5</h5>
                <p>acre</p>
            </div>
        </SectionWrapper>
    )
}

export default VendorMetrics