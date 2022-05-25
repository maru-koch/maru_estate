
import classes from './vendorMeals.module.css'
import realtorPic from '../../../assets/images/land_lord.png'


const RealtorImage = ()=>{ 
    return (
        <section className = {classes.ImageHolder}>
            <div><p>Verified</p></div>
            <img src ={realtorPic} alt ="realtor"/>
        </section>
    )
}

export default RealtorImage