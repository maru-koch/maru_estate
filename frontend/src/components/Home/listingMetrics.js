
import classes from './listingMetrics.module.css'

const VendorMetrics =()=>{
    return (
        <div className = {classes.desc}>
            <div className ={classes.metricsHolder}>
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
            </div>
        </div>
    )
}

export default VendorMetrics