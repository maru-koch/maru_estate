import classes from './vendorMealItem.module.css'
import {increase, decrease} from '../../../../features/menu/menu'
import {addItem, calcTotal} from '../../../../features/cart/cart'
import {useState} from 'react'


//action dispatcher
// dispatches the increment and decrement actions 

import { useDispatch } from 'react-redux'

const VendorMealItem = props =>{
    const price = `$ ${props.meal.price.toFixed(2)}`;
    const dispatch = useDispatch()

    // A template to show a single meal
    // displays the image, name, description and price
    // user can add to cart
    // used in the availableMeals component
    
    // adding item to the cart
    const [added, setAdded] = useState(false)

    const payload = {
            name: props.meal.name,
            quantity: props.meal.quantity,
            price: price
        }

    const addItemHandler = () =>{
        dispatch(addItem(payload))
        setAdded(!added)
    }

    const decreaseHandler =()=>{
        dispatch(decrease(props.meal.id))
        dispatch(calcTotal())
        setAdded(false)
    }

    const increaseHandler =()=>{
        dispatch(increase(props.meal.id))
        dispatch(calcTotal())
        setAdded(false)
    }


    return (<li class = {classes.mealItem}>
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
            <div className={classes.iconHolder}>
                <i className ="fa-solid fa-chevron-left" onClick ={()=>decreaseHandler()}></i>
                <p>{props.meal.quantity}</p>
                <i className ="fa-solid fa-chevron-right" onClick={()=>increaseHandler()}></i>
            </div>
            <div class = {classes.btnHolder}>
                <button className = {added? classes.btn_added: classes.btn_select} onClick ={!added?()=>addItemHandler(): ()=>{}}>{added? 'remove' : 'add'}</button>
            </div>
        </div>
    </li>)
}
export default VendorMealItem