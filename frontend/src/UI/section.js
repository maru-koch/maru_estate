import './section.css'
const Section = props =>{
    return (
    <section className = {`${props.style} section`}>
        {props.children}
    </section>
    )
}

export default Section