import classes from './button.module.css'

const CustomButton =({text})=>{
    return (
        <button className ={classes.btn}>{text}</button>
    )
}

export default CustomButton