
import  classes from './section-header.module.css'

const SectionHeader = (props)=>{
    return (
    <div className = {classes.sectionHeader}>
        <h2>{props.title}</h2>
        <h4>{props.subtitle}</h4>
    </div>
    )
}

export default SectionHeader