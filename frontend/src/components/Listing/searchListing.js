import Section from '../../UI/section'
import SectionWrapper from '../../UI/section-wrapper'
import SectionContainer from '../../UI/section-container'
import classes from './searchListing.module.css'

const Search =props=>{
    return (
        <Section>
            <SectionContainer style ={classes.container}>
                <SectionWrapper style = {classes.wrapper}>
                    <i className ="fa-solid fa-location-dot"></i>
                    <input type="text" className = {classes.input} placeholder="Choose Location"/>
                    <button type="button" className = {classes.btn}>Search</button>
                </SectionWrapper>
            </SectionContainer>
        </Section>
    )
}

export default Search