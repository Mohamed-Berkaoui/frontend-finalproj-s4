import axios from "axios";
import {
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_LOADING,
  FETCH_PRODUCTS_SUCCESS,
} from "./types";

export function fetchDataSuccess(data) {
  return { type: FETCH_PRODUCTS_SUCCESS, payload: data };
}
export function fetchDataLoading() {
  return { type: FETCH_PRODUCTS_LOADING };
}
export function fetchDataError(error) {
  return { type: FETCH_PRODUCTS_ERROR, payload: error };
}

export function fetchData() {
  return async function (dispatch) {
    dispatch(fetchDataLoading());
    axios
      .get("http://localhost:3000/api/v1/product/")
      .then((response) => {
        dispatch(fetchDataSuccess(response.data.data));
      })
      .catch((error) => {
        dispatch(fetchDataError(error.message));
      });
  };
}
