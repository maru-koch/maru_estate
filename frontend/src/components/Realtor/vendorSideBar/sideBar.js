
import classes from './sideBar.module.css'
import Progress from './progress'

const SideBar =(props)=>{
  
    return (
        <div class ={classes.sideBar}>
            <div class ={classes.progressBar}>
                <h1>Menu</h1>
                <Progress/>
            </div>
        </div>
    )
}



export default SideBar