import { Menu } from "../models/beans/beans.schema.js";
import { createOrder } from "../models/beans/beans.model.js";

function httpGetMenu(req, res) {
  Menu.find().then((result) => {
    res.send(result);
  });
}

const temporaryMenu = [
  {
    id: "coffee-vxig26my4y",
    title: "Bryggkaffe",
    desc: "Bryggd på månadens bönor.",
    price: 39,
  },
  {
    id: "coffee-220dodpzmg",
    title: "Caffè Doppio",
    desc: "Bryggd på månadens bönor.",
    price: 49,
  },
  {
    id: "coffee-4pdksmrkfa",
    title: "Cappuccino",
    desc: "Bryggd på månadens bönor.",
    price: 49,
  },
  {
    id: "coffee-m2h37k2mnh",
    title: "Latte Macchiato",
    desc: "Bryggd på månadens bönor.",
    price: 49,
  },
  {
    id: "coffee-0lp6ter3bh",
    title: "Kaffe Latte",
    desc: "Bryggd på månadens bönor.",
    price: 54,
  },
  {
    id: "coffee-e8hz0lk7q5",
    title: "Cortado",
    desc: "Bryggd på månadens bönor.",
    price: 39,
  },
  {
    id: "pastry-db3gfsuqpr",
    title: "Gustav Adolfsbakelse",
    desc: "En kunglig bakelse.",
    price: 50,
  },
  {
    id: "pastry-vkzh17ct2r",
    title: "Semla",
    desc: "En fastlagsbulle i sin rätta form.",
    price: 50,
  },
];

function httpGetMenu() {}


async function httpCreateOrder(req, res) {
  const { order } = req.body;

  let failureReason = "";
  let hasErrors = false;
  
  const menu = await Menu.find();

  order.forEach((currentOrder) => {
    const productExists = temporaryMenu.some((product) => {
      if (product.title === currentOrder.name && product.price === currentOrder.price) return true;
      else if (product.title === currentOrder.name) {
        failureReason = "price";
      } else if (product.price === currentOrder.price) {
        failureReason = "name";
      }
      return false;
    });

    if (!productExists) {
      hasErrors = true;
      if (failureReason === "price") {
        return res.status(404).json({
          success: false,
          error: `Product ${currentOrder.name} with price ${currentOrder.price} does not exist`,
        });
      } else if (failureReason === "name") {
        return res
          .status(404)
          .json({ success: false, error: `Product with name ${currentOrder.name} does not exist.` });
      } else {
        return res
          .status(404)
          .json({
            success: false,
            error: `Product with name ${currentOrder.name} and price ${currentOrder.price} does not exist.`,
          });
      }
    }
  });

  if (!hasErrors) {
    try {
      const newOrder = await createOrder(order);
      return res.status(201).json({ order: newOrder });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ success: false, error: error.message });
    }
  }
}

export { httpGetMenu, httpCreateOrder };
