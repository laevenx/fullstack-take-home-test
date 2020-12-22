const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid')



var schema = new Schema(
  {
    _id:{
      type: String,
      default: uuidv4()
    },
      name: {
        type:String,
        required: [true, 'name is required']
      },
     
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

const Checkout = mongoose.model("Location", schema, "locations");
module.exports = Checkout;
