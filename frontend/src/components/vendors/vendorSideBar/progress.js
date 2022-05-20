
import classes from './progress.module.css'

// shows the scroll progress of a page

const Progress =()=>{
    return (
        <div class={classes.container}>
            <div class={classes.progressContainer}>
                <div class={classes.progress} id="progress"></div>
                <div class={`${classes.circle} ${classes.active}`}>1<span>Swallow</span></div>
                <div class={classes.circle}>2 <span>Soup</span></div>
                <div class={classes.circle}>3 <span>Snacks</span></div>
                <div class={classes.circle}>3 <span>Dissert</span></div>
            </div>
            {/* <button class={classes.btn} id="prev" disabled>Prev</button>
            <button class={classes.btn} id="next">Next</button> */}
        </div>
    )
}

export default Progress