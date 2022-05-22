
import Section from '../../UI/section'
import SectionHeader from '../../UI/section-header'
import SectionWrapper from '../../UI/section-wrapper'
import Card from '../../UI/card'
import classes from './realtorSection.module.css'
import image from '../../assets/images/estate_2.jpg'


const RealtorSection=()=>{ 
    return (
    <Section>
        <SectionHeader title = "Become a Home Owner" subtitle = "Explore, tour, and make a deal"/>
        <div className="section__wrapper">
            <SectionWrapper>
                <div class ={classes.container}>
                    <Card class = {`${classes.card}`}>
                        <div className ={classes.right}>
                            <img src = {image} alt = "side"/>
                        </div>
                    </Card>
                    <Card className = {classes.card}>
                        <div className = {classes.cardWrapper}>
                            <h2>Need a Home</h2>
                            <p> we take great care in preparing our meals. we 
                                serve safe, quality food. That means we use 
                                100% fresh vegs and naturally grown meats and fish. 
                                We understand the nitty-gritty of good native meals across Nigeria.
                                From the heart of the Easter Hartland, where Oha soup and Nkwobi rule the kitchens,
                                to the enclaves of the Northern hemisphere, where freshly cooked yaros served with hot and delicious kali is king, 
                                we have it all.</p>
                        </div>
                        <div className = {classes.btn_holder}>
                            <button>Explore Options</button>
                        </div>
                    </Card>
                </div>
        </SectionWrapper>
        </div>
    </Section>)
}

export default RealtorSection