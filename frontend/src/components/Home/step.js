import Section from '../../UI/section'
import SectionWrapper from '../../UI/section-wrapper'
import SectionHeader from '../../UI/section-header'
import How from './how'
import SectionContainer from '../../UI/section-container'
import classes from './step.module.css'

const steps = [
        {icon: 'fa-solid fa-location-dot', title: 'Buy a home', desc :'Choose location of your choice and find the best listed properties in that area', text: "Search Homes"},
        {icon: "fa fa-cutlery", title: 'Rent a home', desc :'Browse Shops, Event centers, houses, and rooms from our large rental network', text: "See Your Options"},
        {icon: 'fas fa-shipping-fast', title: 'Sell a home', desc :'Sell your Property effortlessly without hassles. Explore brokers for a juicy deal', text: "Find Rentals"},
        
        
]

const Step =()=>{
    return(
        <section>
            <SectionHeader title ="Exclusive Properties" subtitle ="Your dream home is a finger tip away"/>
            <SectionContainer>
                <SectionWrapper style = {classes.wrapper}>
                    {steps.map(step =>
                        <How icon = {step.icon} title = {step.title} desc = {step.desc} btn = {step.text}/>
                    )}
                </SectionWrapper>
            </SectionContainer>
        </section>
    )
}

export default Step