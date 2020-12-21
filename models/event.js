const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var schema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    location: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Location",
      required: [true, "location is required"],
    },
    ticket: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ticket",
        required: [true, "ticketId is required"],
      },
    ],
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

const Checkout = mongoose.model("Event", schema);
module.exports = Checkout;
