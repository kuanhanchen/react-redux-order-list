import React from "react";
import { render, screen } from "../test-utils";
import Order from "../../components/order";

describe("Order", () => {
  describe("Show a in-progreess order", () => {
    beforeEach(() => {
      render(
        <Order
          order={
            {
              "name": "贈-短慧萬用鍋HD2133+三合一濾網「LG樂金」韓國原裝...",
              "logo": "https://static.oopocket.com/store/iconTreemall@3x.png",
              "status": {
                "code": 1,
                "type": "處理中"
              },
              "date": "108/6/2"
            }
          }
          isInProgress={true}
        />);
    });
    it("should show the image", () => {
      expect(screen.getByTestId("order-image")).toBeInTheDocument();
    });
    it("should show the status", () => {
      expect(screen.getByTestId("order-status")).toBeInTheDocument();
    });
    it("should show the name", () => {
      expect(screen.queryByTestId("order-name")).toBeInTheDocument();
    });
    it("should show the delievery date", () => {
      expect(screen.queryByTestId("delivery-date")).toBeInTheDocument();
    });
  });
  describe("Show a completed order", () => {
    beforeEach(() => {
      render(
        <Order
          order={
            {
              "name": "Apple AirPds 2",
              "logo": "https://static.oopocket.com/store/iconTreemall@3x.png",
              "status": {
                "code": 4,
                "type": "已送達"
              },
              "date": "108/3/02"
            }
          }
        />);
    });
    it("shouldn't show the delievery date", () => {
      expect(screen.queryByTestId("delivery-date")).toBeNull();
    });
  });
});
