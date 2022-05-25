import Card from '../../UI/card'
import ListingMetrics from './listingMetrics'
import classes from './listingCard.module.css'
import './slantedFoodCard.css'

const FoodCard =props=>{
    return (

    // displays cards of food on the home page
    // displays image, food name, description, and price
    // user can add to cart
    
    <Card style = {`${classes.card} ${props.style}`}>
        <div class = {classes.listingCard}>
            <div class ={classes.imgWrapper}>
                <img src = {props.image} alt = {props.name}/>
            </div>
            <div class = {classes.desc}>
                <h3>{`$ ${props.price}`}</h3>
                <h5 >{props.name}</h5>
            </div>
           
            <ListingMetrics/>
            <div className={classes.desc}>
                <p p className={classes.address}>{props.city}</p>
                <button className={classes.city}>Details</button>
            </div>
        </div>
    </Card>)
}

export default FoodCard