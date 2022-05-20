import classes from './vendorSearch.module.css'

const VendorSearch =()=>{
    return (
        <section>
            <div className = {classes.search}>
                <i className="fa fa-search"></i>
                <input type ="search" placeholder="Search for meals"/>
                <select>
                    <option>Price</option>
                    <option>Category</option>
                </select>
            </div>
        </section>
    )
}

export default VendorSearch