import axios from "axios";
import {
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAIL,
  API_URL
} from "../constant";
import { handleOrders } from "../../components/utilities/helper";

export const getOrderRequest = () => {
  return {
    type: GET_ORDERS_REQUEST
  };
}

export const getOrdersSuccess = data => {
  const orders = handleOrders(data);
  return ({
    type: GET_ORDERS_SUCCESS,
    inProgressOrders: orders.inProgressOrders,
    completedOrders: orders.completedOrders
  });
}

export const getOrdersFail = () => {
  return {
    type: GET_ORDERS_FAIL
  };
}

export const getOrders = () => {
  return dispatch => {
    dispatch(getOrderRequest());
    axios
      .get(API_URL)
      .then(res => {
        dispatch(getOrdersSuccess(res.data));
      })
      .catch(() => {
        dispatch(getOrdersFail());
      });
  };
}
