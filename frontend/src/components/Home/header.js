import './header.css'
const Header=()=>{
    return (
        <section>
            <div className ="header__wrapper">
                {/* <div class="wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,400,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                    </svg>
                </div> */}
            </div>
            <div className="header__container">
                <div className="header__heading">
                    {/* <h2>Real Estate Properties</h2>
                    <p>Buy, Sell, Lease Lands and Properties</p> */}
                     <img src = "./land_lord.jpg" alt ="property_owner"/>
                </div>
                <div className="header__photo">
                    {/* <img src = "./land_lord.jpg" alt ="property_owner"/> */}
                    <h2>Real Estate Properties</h2>
                    <p>Buy, Sell, Lease Lands and Properties</p>
                </div>
            </div>
        </section>
    )
} 

export default Header