
import classes from './products.module.css'
import Section from '../../UI/section'
import SectionWrapper from '../../UI/section-wrapper'
import SideBar from './sideBar'
import Catalogue from './catalogue'

// const products = [{swallow:[], soup:[], others: []}]

// displays the full product catalogue based on categories

const Product =()=>{
    return (
        <Section style ={classes.products}>
            <SectionWrapper style ={classes.productWrapper}>
                <SideBar/>
                <Catalogue/>
            </SectionWrapper>
        </Section>
    )
}

export default Product