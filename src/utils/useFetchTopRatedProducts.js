import axios from 'axios';
import React, { useEffect, useState } from 'react'

function useFetchTopRatedProducts() {
     const [products, setProducts] = useState({
    data: [],
    loading: false,
    error: null,
  });
  useEffect(() => {
    setProducts((prevState) => ({ ...prevState, loading: true }));
    axios
      .get("http://localhost:3000/api/v1/product/top-rated")
      .then((response) => {
        console.log(response.data);
        setProducts({ data: response.data.data, loading: false, error: null });
      })
      .catch((error) => {
        console.log(error);
        setProducts({ data: [], loading: false, error: error.message });
      });
  }, []);

  return (
    products
  )
}

export default useFetchTopRatedProducts