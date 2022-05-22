import Section from '../../../UI/section'
import SectionWrapper from '../../../UI/section-wrapper'
import classes from './search.module.css'

const Search =props=>{
    return (
        <Section>
            <SectionWrapper style = {classes.wrapper}>
                <i className ="fa-solid fa-location-dot"></i>
                <input type="text" className = {classes.input} placeholder="Choose Location"/>
                <button type="button" className = {classes.btn}>Search</button>
            </SectionWrapper>
        </Section>
    )
}

export default Search