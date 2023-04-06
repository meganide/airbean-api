import add from "date-fns/add/index.js";
import { parseISO } from "date-fns";
import differenceInMinutes from "date-fns/differenceInMinutes/index.js";

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

async function getEtaByOrderNr(orderNr) {
  const { eta, createdAt } = await Order.findOne({ orderNr }).select("eta createdAt");

  const expectedDeliveryISO = add(parseISO(createdAt), { minutes: eta });
  const currentDate = new Date();
  const currentEta = differenceInMinutes(expectedDeliveryISO, currentDate, { roundingMethod: "ceil" });

  return currentEta;
}

// eslint-disable-next-line import/prefer-default-export
export { createOrder, getEtaByOrderNr };
