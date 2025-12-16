
import { useState } from "react";
import Products_List from "../components/Products_List";
import Products_Search from "../components/Products_Search";

function Products() {
    const [search,setSearch]=useState({
        title:"",
        category:"all",
        price:""
    })
 
    function updateSearch(newSearch){
        setSearch(newSearch);
    }
  return (
    <>
      <Products_Search  updateSearch={updateSearch}/>
      <Products_List  search={search}/>
    </>
  );
}

export default Products;
