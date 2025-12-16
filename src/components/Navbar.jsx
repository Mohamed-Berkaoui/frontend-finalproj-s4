import { Link } from "react-router"

function Navbar() {
  return (
    <div className='navbar-container'>
        <h2>ecommerce</h2>
        <ul>
            <li><Link to={"/"}> Home</Link></li>
            <li><Link to={"/products"}>Products</Link></li>
            <li>Cart</li>
            <li><Link to={"/user/register"}>Register</Link></li>
        </ul>
    </div>
  )
}

export default Navbar