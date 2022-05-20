import Card from '../../../UI/card';
import classes from './vendorMeals.module.css'
import MealItem from './VendorMealItem'


import { useSelector } from 'react-redux'
import VendorSearch from '../vendorSearch/vendorSearch';



const VendorMeals = ()=>{ 

    // Showcases all the available meals on the menu
    // User can sort list of meals base on category
    
    // an array of all available meal in the menu
    const { menuItems } = useSelector((store)=>store.menu)
    
    return (
        <Card class = {classes.mealCard}>
            <VendorSearch/>
            <ul class ={classes.mealList}>
                {menuItems.map(meal =><MealItem meal = {meal} key = {meal.id}/>)}
            </ul>
        </Card>
    )
}

export default VendorMeals