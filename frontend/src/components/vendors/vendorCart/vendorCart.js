import {useState}  from 'react'
import VendorCartItem from './vendorCartItem'
import SectionWrapper from '../../../UI/section-wrapper'
import Section from '../../../UI/section'
import SectionContainer from '../../../UI/section-container'
import classes from './vendorCartItem.module.css'



const EmptyCart=()=>{
    return (
        <div className = {classes.emptyCartContainer}>
            <div className = {classes.notice}>
                <p>Your Cart is Empty</p>
            </div>
            <div className = {classes.btn}>
                <button>Add Items</button>
            </div>
        </div>
    )
}

const CartItem=()=>{
    return (
        <SectionWrapper>
            <VendorCartItem/>
        </SectionWrapper>
    )
}

const VendorCart =()=>{
    const {isEmpty, setIsEmpty} = useState(true)
    return(
        <div className={classes.vendorCartContainer}>
            {isEmpty? <CartItem/>: <EmptyCart/>}
        </div>
    )
}

export default VendorCart