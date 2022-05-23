
import classes from './sideBar.module.css'


const SideBar =(props)=>{
  
    return (
        <div className ={classes.sideBar}>
            <div className ={classes.topBar}>
                <h1>Recent Hot Deals</h1>
                <div className ={classes.sortBy}>
                    <p>Sort By</p>
                    <select>
                        <option>Price</option>
                        <option>Location</option>
                        <option>Size</option>
                        <option>Bath Room</option>
                    </select>
                </div>
            </div>
            
            <div className ={classes.barHolder}>
                <div className ={classes.bar}>
                    <h3>Abuja</h3>
                    <p>45</p>
                </div>
                <div className ={classes.bar}>
                    <h3>Lagos</h3>
                    <p>450</p>
                </div>
                <div className ={classes.bar}>
                    <h3>Imo</h3>
                    <p>45</p>
                </div>
            </div>
        </div>
    )
}



export default SideBar