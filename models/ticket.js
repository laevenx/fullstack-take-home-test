const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var schema = new Schema(
  {
      name: {
        type:String,
        required: [true, 'name is required']
      },
     event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
        required: [true, 'event is required']
     },
     price: {
         type: Number,
         required: [true, 'price is required']
     },
     quota: {
         type: Number,
         required: [true, 'quota is required']
     }
     
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

const Checkout = mongoose.model("Ticket", schema);
module.exports = Checkout;
