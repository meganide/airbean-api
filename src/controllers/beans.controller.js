import { Menu } from "../models/beans/beans.schema.js";
import { createOrder } from "../models/beans/beans.model.js";

function httpGetMenu(req, res) {
  Menu.find().then((result) => {
    res.send(result);
  });
}

async function httpCreateOrder(req, res) {
  const { order } = req.body;

  try {
    const newOrder = await createOrder(order);
    return res.status(201).json({ order: newOrder });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message });
  }
}

export { httpGetMenu, httpCreateOrder };
