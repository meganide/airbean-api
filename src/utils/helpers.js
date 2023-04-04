function validateOrder(res, order, menu) {
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

  return hasErrors;
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

export { getErrorMessage, validateOrder };
