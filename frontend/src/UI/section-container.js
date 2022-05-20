
import classes from './section-container.module.css'

const SectionContainer = (props)=>{
    return (
        <section className={`${classes.section} ${props.style}`}>{props.children}</section>
    )
}

export default SectionContainer
