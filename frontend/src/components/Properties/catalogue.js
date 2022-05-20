import Property from "./property"

import classes from './catalogue.module.css'
import SectionContainer from "../../UI/section-container"
import {useSelector} from 'react-redux'

const Catalogue =()=>{
    const {menuItems} = useSelector(state => state.menu)
    return (
        <SectionContainer>
            <div class ={classes.catalogue}>
                <ul class ={classes.mealList}>
                    {menuItems.map(meal =><Property meal = {meal} key = {meal.id}/>)}
                </ul>
            </div>
        </SectionContainer>
    )
}

export default Catalogue