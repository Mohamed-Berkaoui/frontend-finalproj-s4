import {
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_LOADING,
  FETCH_PRODUCTS_SUCCESS,
} from "./types";

function productReducer(
  state = { data: [], loading: false, error: null },
  action
) {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_PRODUCTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
{
}
export default productReducer;
