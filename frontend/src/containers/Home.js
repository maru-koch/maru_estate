import {useSelector, useDispatch} from "react-redux"
import {changeText} from '../reducers/authReducer'

const Home =()=>{
    const {testing} = useSelector(store =>store.auth)
    const dispatch = useDispatch()

    return (
    <div>
        <h1>Home Page</h1>
        <h2>{testing}</h2>
        <button onClick={()=>dispatch(changeText())}>Press something</button>
    </div>
    )
}

export default Home