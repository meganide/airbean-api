import { Order } from "./beans.schema.js";

async function createOrder(orderDetails) {
  const newOrder = new Order({
    orderDetails,
  });

  await newOrder.save();

  return newOrder;
}

// eslint-disable-next-line import/prefer-default-export
export { createOrder };
