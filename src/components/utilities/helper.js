import get from "lodash/get";

export const handleOrders = (orders = []) => {
  const inProgressOrders = [];
  const completedOrders = [];
  if (!Array.isArray(orders)) {
    return {
      inProgressOrders,
      completedOrders
    }
  }
  orders.forEach(order => {
    const code = get(order, "status.code");
    if (code === 1 || code === 2) {
      inProgressOrders.push(order);
    } else if (code === 3 || code === 4) {
      completedOrders.push(order);
    }
  });

  return {
    inProgressOrders: inProgressOrders.sort((a, b) => new Date(b.date) - new Date(a.date)),
    completedOrders: completedOrders.sort((a, b) => new Date(b.date) - new Date(a.date))
  }
}
