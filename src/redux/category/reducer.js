function categoryReducer(state = { data: [], error: null }, action) {
  switch (action.type) {
    case "FETCH_CATEGORIES_SUCCESS":
      return {
        ...state,
        data: action.payload,
      };
    case "FETCH_CATEGORIES_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
export default categoryReducer;
