import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";

function Navbar() {
  const token = useSelector((state) => state.user);
  const dispatch = useDispatch();
  function handleLogout() {
    localStorage.removeItem("token");
    dispatch({ type: "CLEAR_USER" });
  }
  return (
    <div className="navbar-container">
      <h2>ecommerce</h2>
      <ul>
        <li>
          <Link to={"/"}> Home</Link>
        </li>
        <li>
          <Link to={"/products"}>Products</Link>
        </li>
        <li><Link to={"/cart"}>Cart</Link></li>

        {!token ? (
          <li>
            <Link to={"/user/register"}>Register</Link>
          </li>
        ) : (
          <li onClick={handleLogout}>logout</li>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
