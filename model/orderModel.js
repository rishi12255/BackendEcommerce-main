const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  totalAmount: {
    type: Number,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  items: {
    type: [
      {
        itemName: { type: String, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    required: true,
  },
  cName: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  deliveryDescription: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    enum: ["pending", "delivered"],
    default: "pending",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
