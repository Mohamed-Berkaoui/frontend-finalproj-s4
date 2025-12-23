function cartReducer(state = [], action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return state.find((item) => item._id === action.payload._id)
        ? state.map((item) =>
            item._id === action.payload._id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...state, { ...action.payload, quantity: 1 }];
    case "REMOVE_FROM_CART":
      return state.filter((item) => item._id !== action.payload._id);
    case "CLEAR_CART":
      return [];
    case "INCREASE_QUANTITY":
      return state.map((item) =>
        item._id === action.payload._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    case "DECREASE_QUANTITY":
      return state.map((item) =>
        item._id === action.payload._id
          ? item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
          : item
      );

    default:
      return state;
  }
}
export default cartReducer;