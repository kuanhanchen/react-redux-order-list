import orders from "../../../redux/reducers/orders";
import {
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAIL
} from "../../../redux/constant";

describe("tests for orders reducer", () => {
  let action = {};
  let state = {
    isLoading: false,
    inProgressOrders: [],
    completedOrders: [],
    error: ''
  };
  it(`should return a new object with isLoading: true during requesting orders`, () => {
    action = { type: GET_ORDERS_REQUEST };
    expect(orders(state, action).isLoading).toBe(true);
  });
  it(`should return a new object with isLoading: false and orders when getting orders successfully`, () => {
    action = {
      type: GET_ORDERS_SUCCESS,
      inProgressOrders: [],
      completedOrders: []
    };
    expect(orders(state, action).inProgressOrders).toEqual([]);
    expect(orders(state, action).completedOrders).toEqual([]);
    expect(orders(state, action).isLoading).toEqual(false);
  });
  it(`should return a new object with isLoading: false and error when getting orders falied `, () => {
    action = { type: GET_ORDERS_FAIL };
    expect(orders(state, action).error).toEqual("Something went wrong.");
    expect(orders(state, action).isLoading).toEqual(false);
  });
});
