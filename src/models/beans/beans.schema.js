import mongoose from "mongoose";

const Schema = mongoose.Schema;

const menuSchema = new Schema({
    title: { type : String, required: true},
    desc: { type : String, required: true},
    price: { type : Number, required: true},
})

const Menu = mongoose.model('Menu', menuSchema)

const orderSchema = new Schema({
  orderNr: { type: String, default: () => Math.random() * 10 },
  eta: { type: Number, default: Math.random() * 50 },
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
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
});

const Order = mongoose.model("Order", orderSchema);

export { Order, Menu };
