import Logo from '../../assets/images/logo.png'
import './footer.css'

const MenuCard =()=>{
    return (
    <div className="footerCard">
        <img src ={Logo} alt="Logo"/>
        <ul>
            <li>Property Management</li>
        </ul>
    </div>
    )
}

export default MenuCard