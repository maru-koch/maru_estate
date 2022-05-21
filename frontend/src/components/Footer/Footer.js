import SectionWrapper from "../../UI/section-wrapper"
import Section from '../../UI/section'
import CopyRight from './copyRight'
import SocialMedia from './socialMedia'
import AddressCard from './addressCard'
import MenuCard from './menuCard'
import NavCard from './navCard'
import InfoCard from './infoCard'

import classes from './footer.module.css'
import './footer.css'


const Footer =()=>{
    return (
        <Section style ={classes.footer}>
            <div className = {classes.box}>
                <SectionWrapper style ={classes.wrapper}>
                    <InfoCard/>
                    <AddressCard/>
                    <div className = {classes.footerLinks}>
                        <NavCard/>
                        <MenuCard/>
                    </div>
                </SectionWrapper>
            </div>
            {/* <SocialMedia/> */}
            <CopyRight/>
        </Section>
    )
}

export default Footer