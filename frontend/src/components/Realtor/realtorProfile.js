
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