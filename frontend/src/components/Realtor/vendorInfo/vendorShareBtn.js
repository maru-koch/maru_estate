
import classes from './vendorShareBtn.module.css'
const VendorShareBtn=()=>{
    return(
        <section className={classes.vendorShareBtn}>
            <button className ={classes.btn}><span><i className="fa-solid fa-heart"></i></span>Favorite</button>
            <button className ={classes.btn}><span><i className="fa-solid fa-share"></i></span>Share</button>
        </section>
    )
}

export default VendorShareBtn