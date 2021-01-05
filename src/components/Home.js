import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getOrders } from "../redux/actions";
import OrderList from "./order-list";

const Home = ({ getOrders = () =>{}, inProgressOrders = [], completedOrders = [], isLoading, error }) => {
  useEffect(() => {
    getOrders();
  }, [getOrders]);

  if (isLoading) {
    return <h1>Loading</h1>;
  } else if (error !== '') {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <OrderList
        inProgressOrders={inProgressOrders}
        completedOrders={completedOrders}
      />
    </div>
  );
};

const mapStateToProps = ({ orders }) => {
  return {
    inProgressOrders: orders.inProgressOrders,
    completedOrders: orders.completedOrders,
    isLoading: orders.isLoading,
    error: orders.error
  };
};

export default connect(mapStateToProps, { getOrders })(Home);
