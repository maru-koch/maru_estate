import classes from './cart-label.module.css'
import {useState} from 'react'

const CartLabel=props=>{


    // a component used in the FoodCard Component
    // provides template for the display of cart icon, meal add and call to action button (add)

    const [added, setAdded] = useState(false)

    const addItemHandler =()=>{
        setAdded(true)
    }

    return (
    <div className={classes.Label}>
        {/* soup price */}
        <h5 class = {classes.price}>{`$ ${props.soupPrice}`}</h5>

        {/* cart icons, soup name, add */}
        <div class={classes.cartLabel}>
            <i class ={props.cartIcon} aria-hidden="true"></i>
            <p class ={classes.name} id = "soupName">{props.soupName}</p>
            <p class = {classes.handle} onClick = {addItemHandler}>{added? <i className = "fa-solid fa-good"></i>:props.handle} </p>
        </div>
    </div>
    )
}

export default CartLabel