import {Link} from 'react-router-dom'
const Dashboard =(props)=>{
    return(
        <div>
            <h1>Dash Board</h1>
            <p>Welcome, John</p>
            <Link to = {`/listing/${1}`}><h1>Listing</h1></Link>
        </div>
    )
}

export default Dashboard