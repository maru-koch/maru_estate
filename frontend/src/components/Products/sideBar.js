import {useMemo, useEffect} from 'react'
import classes from './sideBar.module.css'
import Progress from './progress'

const SideBar =(props)=>{
    // const [sideBarTop, setSideBarTop] = useState()

    
    // listen for window scrolling
    useMemo(()=>{
        return updateSideBarTop
    }, [])

    useEffect(()=>{
        window.addEventListener('scroll', updateSideBarTop)
    })

    return (
        <div class ={classes.sideBar}>
            <div class ={classes.progressBar}>
                <h1>Menu</h1>
                <Progress/>
            </div>
        </div>
    )
}

const updateSideBarTop=()=>{
        //
    }


export default SideBar