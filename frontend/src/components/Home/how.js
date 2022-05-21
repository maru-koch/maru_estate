import Card from '../../UI/card'
import classes from './how.module.css'


const How = props =>{
    return (
        <Card style ={classes.card}>
            <div>
                
            </div>
            <div className ={classes.info_holder}>
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
            </div>
            <div className = {classes.btn_holder}>
                <button>{props.btn}</button>
            </div>
        </Card>
    )
}

export default How