const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var schema = new Schema(
  {
      name: {
        type:String,
        required: [true, 'name is required']
      },
     location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Location",
        required: [true, 'location is required']
     },
     
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

const Checkout = mongoose.model("Location", schema);
module.exports = Checkout;
