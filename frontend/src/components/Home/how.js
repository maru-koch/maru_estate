import Card from '../../UI/card'
import classes from './how.module.css'
const How = props =>{
    return (
        <Card style ={classes.card}>
            <i className = {props.icon}></i>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </Card>
    )
}

export default How