import * as actions from "../../../redux/actions";
import {
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAIL
} from "../../../redux/constant";

describe("actions", () => {
  it("should create an action to show getting orders request started", () => {
    const expectedAction = {
      type: GET_ORDERS_REQUEST
    }
    expect(actions.getOrderRequest()).toEqual(expectedAction);
  });
  it("should create an action to show getting orders successfully", () => {
    const data = [
      {
        "name": "Livi優活 抽取式衛生紙(100抽x10包x10串/箱)",
        "logo": "https://static.oopocket.com/store/iconTreemall@3x.png",
        "status": {
          "code": 3,
          "type": "已取消"
        },
        "date": "107/6/12"
      },
      {
        "name": "BALMUDA The Toaster 百慕達烤麵包機-黑色",
        "logo": "https://static.oopocket.com/store/iconTreemall@3x.png",
        "status": {
          "code": 2,
          "type": "已成立"
        },
        "date": "108/7/21"
      }
    ];
    const expectedAction = {
      type: GET_ORDERS_SUCCESS,
      inProgressOrders: [
        {
          "name": "BALMUDA The Toaster 百慕達烤麵包機-黑色",
          "logo": "https://static.oopocket.com/store/iconTreemall@3x.png",
          "status": {
            "code": 2,
            "type": "已成立"
          },
          "date": "108/7/21"
        }
      ],
      completedOrders: [
        {
          "name": "Livi優活 抽取式衛生紙(100抽x10包x10串/箱)",
          "logo": "https://static.oopocket.com/store/iconTreemall@3x.png",
          "status": {
            "code": 3,
            "type": "已取消"
          },
          "date": "107/6/12"
        }
      ]  
    }
    expect(actions.getOrdersSuccess(data)).toEqual(expectedAction);
  });
  it("should create an action to show getting orders failed", () => {
    const expectedAction = {
      type: GET_ORDERS_FAIL
    }
    expect(actions.getOrdersFail()).toEqual(expectedAction);
  });
});
