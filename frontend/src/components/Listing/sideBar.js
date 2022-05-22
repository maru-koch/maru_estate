
import classes from './sideBar.module.css'


const SideBar =(props)=>{
  
    return (
        <div class ={classes.sideBar}>
            <div class ={classes.progressBar}>
                <h1>Buy Properties</h1>
                <div>
                    <h3>Abuja</h3>
                    <p>45</p>
                </div>
                <div>
                    <h3>Lagos</h3>
                    <p>450</p>
                </div>
                <div>
                    <h3>Imo</h3>
                    <p>45</p>
                </div>
            </div>
        </div>
    )
}



export default SideBar