import { Menu } from "../models/beans/beans.schema.js";

async function validateOrder(req, res, next) {
  const { order } = req.body;
  const menu = await Menu.find();

  if (!order || order.length === 0 ) {
    return res.status(400).json({ success: false, error: "Bad request, order can not be empty." });
  }

  let failureReason = "";
  let hasErrors = false;

  order.forEach((currentOrder) => {
    const productExists = menu.some((product) => {
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
      const errorMessage = getErrorMessage(failureReason, currentOrder);
      return res.status(404).json({ success: false, error: errorMessage });
    }
  });

  if (!hasErrors) {
    next();
  }
}

function getErrorMessage(failureReason, order) {
  if (failureReason === "price") {
    return `Product ${order.name} with price ${order.price} does not exist`;
  } else if (failureReason === "name") {
    return `Product with name ${order.name} does not exist.`;
  } else {
    return `Product with name ${order.name} and price ${order.price} does not exist.`;
  }
}

export { validateOrder, getErrorMessage };
