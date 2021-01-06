import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { handleOrders } from "../../../components/utilities/helper";

describe("Helper functions", () => {
  describe("handleOrders function", () => {
    let data = [];
    let expectedData = {};
    it("should return an object to have filtered completedOrders and inProgressOrders", () => {
      data = [
        {
          "name": "name1",
          "logo": "logo1",
          "status": {
            "code": 3,
            "type": "已取消"
          },
          "date": "107/6/12"
        },
        {
          "name": "name2",
          "logo": "logo2",
          "status": {
            "code": 2,
            "type": "已成立"
          },
          "date": "108/7/21"
        }
      ];
      expectedData = {
        "completedOrders": [
          {
            "name": "name1",
            "logo": "logo1",
            "status": {
              "code": 3,
              "type": "已取消"
            },
            "date": "107/6/12"
          }
        ],
        "inProgressOrders": [ 
          {
            "name": "name2",
            "logo": "logo2",
            "status": {
              "code": 2,
              "type": "已成立"
            },
            "date": "108/7/21"
          }
        ]
      };
      expect(handleOrders(data)).toEqual(expectedData);
    });
    it("should handle a case regarding the input is an empty array", () => {
      data = [];
      expectedData = {
        "completedOrders": [],
        "inProgressOrders": []
      };
      expect(handleOrders(data)).toEqual(expectedData);
    });
    it("should handle a case regarding the input is not an array", () => {
      data = "";
      expectedData = {
        "completedOrders": [],
        "inProgressOrders": []
      };
      expect(handleOrders(data)).toEqual(expectedData);
    });
    it("should handle a case regarding the input is null", () => {
      expectedData = {
        "completedOrders": [],
        "inProgressOrders": []
      };
      expect(handleOrders()).toEqual(expectedData);
    });
    it("should sort orders by date in descending order", () => {
      data = [
        {
          "name": "name1",
          "logo": "logo1",
          "status": {
            "code": 2,
            "type": "已成立"
          },
          "date": "107/6/12"
        },
        {
          "name": "name2",
          "logo": "logo2",
          "status": {
            "code": 2,
            "type": "已成立"
          },
          "date": "108/7/21"
        }
      ];
      expectedData = {
        "completedOrders": [],
        "inProgressOrders": [
          {
            "name": "name2",
            "logo": "logo2",
            "status": {
              "code": 2,
              "type": "已成立"
            },
            "date": "108/7/21"
          }, 
          { 
            "name": "name1",
            "logo": "logo1",
            "status": {
              "code": 2,
              "type": "已成立"
            },
            "date": "107/6/12"
          }
        ]
      };
      expect(handleOrders(data)).toEqual(expectedData);
    });
  });
});
