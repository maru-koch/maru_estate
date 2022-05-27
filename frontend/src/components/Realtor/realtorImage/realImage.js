
import classes from './realtorImage.module.css'
import realtorPic from '../../../assets/images/land_lord.png'


const RealtorImage = ()=>{ 
    return (
        <section className = {classes.ImageHolder}>
            <div className = {classes.Image__verified}>
                <p>Verified</p>
            </div>
            <div className = {classes.Image__img}>
                <img src ={realtorPic} alt = "realtor"/>
            </div>
        </section>
    )
}

export default RealtorImage