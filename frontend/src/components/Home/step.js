import Section from '../../UI/section'
import SectionWrapper from '../../UI/section-wrapper'
import SectionHeader from '../../UI/section-header'
import How from './how'
import SectionContainer from '../../UI/section-container'

const steps = [
        {icon: 'fa-solid fa-location-dot', title: 'Buy', desc :'Choose location where you want us to deliver'},
        {icon: "fa fa-cutlery", title: 'Lease/Rent', desc :'Browse Properties near you'},
        {icon: 'fas fa-shipping-fast', title: 'Sell', desc :'Explore brokers for a juicy deal'},
        
        
]

const Step =()=>{
    return(
        <section>
            <SectionHeader title ="Exclusive Properties" subtitle ="Your dream home is a finger tip away"/>
                <SectionContainer>
                    <SectionWrapper>
                    {steps.map(step =>
                        <How icon = {step.icon}
                            title = {step.title}
                            desc = {step.desc}
                        />
                    )}
                </SectionWrapper>
            </SectionContainer>
        </section>
    )
}

export default Step