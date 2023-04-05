import mongoose from "mongoose";
import { format } from "date-fns";
import { sv } from "date-fns/locale/index.js";

const { Schema } = mongoose;

const menuSchema = new Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: Number, required: true },
});

const Menu = mongoose.model("Menu", menuSchema);

const orderSchema = new Schema({
  orderNr: { type: String, default: () => new mongoose.mongo.ObjectId(), unique: true, index: true, required: true },
  eta: { type: Number, default: () => Math.floor(Math.random() * 54) + 7 },
  orderDetails: [
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  createdAt: {
    type: String,
    immutable: true,
    default: () => {
      const currentDate = new Date();
      const formattedDate = format(currentDate, "yyyy-MM-dd HH:mm", { locale: sv });
      return formattedDate;
    },
  },
});

const Order = mongoose.model("Order", orderSchema);

export { Order, Menu };
