const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var schema = new Schema(
  {
      name: {
        type:String,
        required: [true, 'name is required']
      },
      event:{
        type: mongoose.Schema.Types.String,
        ref: "Location",
        required: [true, 'event is required']
      },
     tickets: [
        {
            type: {
              type: String,
              required: [true, "ticket type is required"],
            },
            qty: {
                type: Number,
                required: [true, 'quantity is required']
            }
          },
     ]
     
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

const Checkout = mongoose.model("Purchase", schema, "purchases");
module.exports = Checkout;
