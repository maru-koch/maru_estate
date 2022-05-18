import {useParams} from 'react-router-dom'

const ListingDetail =()=>{
    const {property} = useParams()
    return (
    <div>
        <h1>Listing Detail</h1>
        <p>{property}</p>
    </div>
    )
}

export default ListingDetail