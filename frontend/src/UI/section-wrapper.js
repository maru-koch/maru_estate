import './section-wrapper.css'

const SectionWrapper = props =>{
    return (
    <section className = {`sectionWrapper ${props.style}`}>
        {props.children}
    </section>
    )
}

export default SectionWrapper