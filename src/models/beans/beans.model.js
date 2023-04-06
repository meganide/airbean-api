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

// eslint-disable-next-line import/prefer-default-export
export { createOrder };
