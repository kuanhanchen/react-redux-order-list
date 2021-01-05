import {
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAIL
} from "../constant";

const initialState = {
  isLoading: false,
  inProgressOrders: [],
  completedOrders: [],
  error: ''
};

const orders = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_ORDERS_SUCCESS:
      return {
        ...state,
        inProgressOrders: [...action.inProgressOrders],
        completedOrders: [...action.completedOrders],
        isLoading: false,
        error: ''
      };
    case GET_ORDERS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error || "Something went wrong."
      };
    default:
      return state;
  }
};

export default orders;
