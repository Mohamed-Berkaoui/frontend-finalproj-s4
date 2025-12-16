
import { Link, useNavigate } from "react-router";
import handleSubmit from "../utils/handleRegister";

function Register() {
const navigate=useNavigate();
  return (
    <div className="register-container">
      <form onSubmit={(e)=>handleSubmit(e,navigate  )}>
        <h2>Register</h2>
        <input type="text" name="name" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          required
        />
        <button type="submit">Register</button>
      
      <p style={{margin:"10px"}}>already have an account? <Link to={"/user/login"}>Login</Link></p>
      </form>
    </div>
  );
}

export default Register;
