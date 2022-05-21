import classes from './copyRight.module.css'
// import logo from '../../../assets/logo.png'

const CopyRight=()=>{
    return (
        <div class = {classes.container}>
            <div  class = {classes.wrapper}>
                {/* <div class ={classes.img}>
                    <img src = "" alt="logo"/>
                </div> */}
                <p>&copy; 2022</p>
                <p> Foodly. All rights reserved. </p>
            </div>
        </div>
    )
}

export default CopyRight