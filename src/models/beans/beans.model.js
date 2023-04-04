import mongoose from "mongoose";

const orderSchema = mongoose.model({
  name: { type: String, required: true },
});

export default mongoose.model("orders", orderSchema);