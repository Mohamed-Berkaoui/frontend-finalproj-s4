import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { fetchData } from "./redux/products/actions";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import Products from "./pages/Products";
import { fetchCategories } from "./redux/category/actions";
import { ToastContainer } from "react-toastify";
import Register from "./pages/Register";
import Verify from "./pages/Verify";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchCategories())
  }, []);

  return (
    <>
      <Navbar />
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/verify/:hash/:userId" element={<Verify />} />
      </Routes>
    </>
  );
}

export default App;
