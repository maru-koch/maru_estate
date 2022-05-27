import RealtorImage from "./realtorImage/realImage"
import RealtorInfo from './realtorInfo/realtorInfo'
import RealtorSocialMedia from './realtorSocialMedia/socialMedia'
import RealtorMetrics from './realtorMetrics/realtorMetrics'
import Contact from './realtorContact/contact'

import classes from './realtorProfile.module.css'

const RealtorProfile =()=>{
    return (
        <section className={classes.realtorProfile}>
            <section className={classes.top}>
                <RealtorImage/>
            </section>
            <section className={classes.middle}>
                <RealtorInfo/>
                <RealtorSocialMedia/>
                <RealtorMetrics/>
            </section>
            <section className={classes.bottom}>
                <Contact/>
            </section>
        </section>
    )
}

export default RealtorProfile