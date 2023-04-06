import { Order } from "./beans.schema.js";

async function createOrder(orderDetails, userId) {
  const newOrder = new Order({
    orderDetails,
  });

  if (userId) {
    newOrder.userId = userId;
  }

  await newOrder.save();

  return newOrder;
}

async function findOrders(userId) {
  
  const orderData = await Order.find({ userId }).select("orderNr createdAt total")
  return orderData;
}

// eslint-disable-next-line import/prefer-default-export
export { createOrder, findOrders };
