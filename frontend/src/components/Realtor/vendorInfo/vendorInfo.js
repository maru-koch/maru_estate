import SectionWrapper from '../../../UI/section-wrapper'
import vendorImg from '../../../../assets/akara.jpeg'
import VendorDetails from './vendorDetails'
import VendorShareBtn from './vendorShareBtn'
// import VendorImage from './vendorImage'
import classes from './vendorInfo.module.css'
import SectionContainer from '../../../UI/section-container'

const VendorInfo=()=>{
    return (
        <SectionContainer style ={classes.container}>
            <SectionWrapper style = {classes.wrapper}>
                
                <VendorDetails/>
                <VendorShareBtn/>
            </SectionWrapper>
        </SectionContainer>
    )
}

export default VendorInfo