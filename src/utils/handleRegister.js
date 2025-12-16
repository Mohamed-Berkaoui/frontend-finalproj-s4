import axios from "axios";

import { toast } from "react-toastify";

const handleSubmit = (e, navigate) => {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  const confirmPassword = e.target.confirmPassword.value;
  if (password !== confirmPassword) {
    toast.error("Passwords do not match!");
    return;
  }
  axios
    .post("http://localhost:3000/api/v1/user/register", {
      name,
      email,
      password,
    })
    .then((res) => {
      console.log(res);
      toast.success("Registration successful! Please log in.");
  
    })
    .catch((err) => {
      console.log(err);
      toast.error("An error occurred: " + err.response?.data.data);
    });
};
export default handleSubmit;
