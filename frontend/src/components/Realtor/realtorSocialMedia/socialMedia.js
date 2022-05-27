import {Link} from 'react-router-dom'
import classes from './socialMedia.module.css'


const SocialMedia = ()=>{
    return (
        <div class ={classes.container}>
            <div class = {classes.wrapper}>
                <Link to = "" class = {classes.icons}><i  className = "fab fa-facebook" ></i></Link>
                <Link to = "" class = {classes.icons}><i  className = "fab fa-twitter"></i></Link>
                <Link to = "" class = {classes.icons}><i  className = "fab fa-instagram"></i></Link>
            </div>
        </div>
    )
}

export default SocialMedia