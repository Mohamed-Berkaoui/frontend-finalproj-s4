import axios from "axios";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

function Login() {
  const dispatch = useDispatch();
const location =useLocation()
  const navigate=useNavigate();
  function handleLogin(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    axios
      .post("http://localhost:3000/api/v1/user/login", { email, password })
      .then((res) => {
        localStorage.setItem("token", res.data.data);
        dispatch({ type: "SET_USER", payload: res.data.data });
        toast.success("Login successful!");
        navigate(location.state || '/');
      })
      .catch((err) => {
        toast.error("Login failed: " + err.response?.data.data);
      });
  }
  return (
    <div className="register-container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">login</button>
        <p style={{ margin: "10px" }}>
          already have an account? <Link to={"/user/register"}>register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
