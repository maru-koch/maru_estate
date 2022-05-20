import classes from './mealItem.module.css'
import Card from '../../UI/card'
import { addItem } from '../../../features/cart/cart';
import {useDispatch} from 'react-redux'

const Property = props =>{
    const price = `$ ${props.meal.price.toFixed(2)}`;
    const dispatch = useDispatch()
    // A template to show a single meal
    // displays the image, name, description and price
    // user can add to cart
    // used in the availableMeals component
    
   const addItemHandler = () =>{
        const payload = {
            name: props.meal.name,
            quantity: props.meal.quantity,
            price: price
        }
        dispatch(addItem(payload))
    }

    return (
        <li class = {classes.mealItem}>
            <Card class = {classes.card}>
                <div class = {classes.mealDetail}>
                    <div class = {classes.img}>
                        <img src = {props.meal.pic} alt = {props.meal.name}/>
                    </div>
                    <div class = {classes.collection}>
                        <h3>{props.meal.name}</h3>
                        <p class ={classes.desc}>{props.meal.desc}</p>
                        <h4>{price}</h4>
                    </div>
                </div>
                <div class ={classes.selection}>
                    <button class = {classes.btn_select} onClick ={()=>addItemHandler()}>View Details</button>
                </div>
            </Card>
        </li>
    )
}
export default Property