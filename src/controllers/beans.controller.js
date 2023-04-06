import { Menu } from "../models/beans/beans.schema.js";
import { createOrder, getEtaByOrderNr } from "../models/beans/beans.model.js";

function httpGetMenu(req, res) {
  Menu.find().then((result) => {
    res.send(result);
  });
}

async function httpCreateOrder(req, res) {
  const { order } = req.body;
  const { userId } = req;

  try {
    const newOrder = await createOrder(order, userId);
    return res.status(201).json({ order: newOrder });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
}

async function httpGetEtaByOrderNr(req, res) {
  const { orderNr } = req.params;

  const eta = await getEtaByOrderNr(orderNr);

  if (eta > 0) {
    return res.status(200).json({ eta });
  }

  return res.status(200).json({ success: false, error: "Ingen aktiv beställning" });
}

export { httpGetMenu, httpCreateOrder, httpGetEtaByOrderNr };
