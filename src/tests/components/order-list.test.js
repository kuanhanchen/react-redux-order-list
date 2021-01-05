import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "../test-utils";
import OrderList from "../../components/order-list";

describe("Order list", () => {
  beforeEach(() => {
    render(
      <OrderList
        inProgressOrders={[{}]}
        completedOrders={[{}]}
      />);
  });
  it("should show headings", () => {
    expect(screen.getByTestId("in-progress-orders-heading")).toBeInTheDocument();
    expect(screen.getByTestId("completed-orders-heading")).toBeInTheDocument();
  });
});
