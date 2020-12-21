const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var schema = new Schema(
  {
      name: {
        type:String,
        required: [true, 'name is required']
      },
     ticket: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Location",
        required: [true, 'ticket is required']
     }
     
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

const Checkout = mongoose.model("Purchase", schema);
module.exports = Checkout;
