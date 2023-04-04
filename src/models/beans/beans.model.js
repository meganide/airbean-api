import { Order } from "./beans.schema.js";

async function createOrder(orderDetails) {
  const newOrder = new Order({
    orderDetails
  });

  await newOrder.save();

  return newOrder;
}

export { createOrder };
