
import Card from '../../../UI/card'
import classes from './vendorCartItem.module.css'

// useSelector is used to get the redux store containing our states 
import {useDispatch, useSelector} from 'react-redux'

// importing removeItem, calcTotal action from cartSlice
import {removeItem, calcTotal} from '../../../../features/cart/cart'


import { useEffect } from 'react'

const VendorCartItem =(props)=>{

    // the useSelector gets the global cart State from the redux store
    // the cartItems is an array containing all items added to cart
  
    const {cartItems, total} = useSelector((store)=> store.cart)
    const dispatch = useDispatch()


    // checking for the change in cart items to recalculate the total
    useEffect(()=>{dispatch(calcTotal())}, [removeItem])
        
    return (
        <Card class = {classes.cart} onClick =  {props.hideModal}>
            <div class ={classes.orderedItem}>
                <p>Items</p>
                <p>Qty</p>
                <p>Amount</p>
            </div>
            <div class ={classes.itemHolder}>
                {cartItems.map((item, id)=><div key = {id} class ={classes.orderedItem}>
                <h4>{item.name}</h4>
                <h3>{item.quantity}</h3>
                <p>{`$ ${item.price}.`}</p>
                <button class="fa-solid fa-remove" onClick = {()=>dispatch(removeItem({id:id}))}></button>
            </div>)}

            <div class ={`${classes.total}`}>
                <h4>Total</h4>
                <h4>{`$ ${total}`}</h4>
            </div>
            </div>
            <div class ={classes.btnHolder}>
                <button class = {classes.checkOutBtn}>Check out</button>
            </div>
        </Card>
    )
}

export default VendorCartItem