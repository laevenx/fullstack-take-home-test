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
      type: String,
      required: [true, "name is required"],
    },
    location: {
      type: mongoose.Schema.Types.String,
      ref: "Location",
      required: [true, "location is required"],
    },
    startDate: {
        type: Date,
        required: [true, "start date is required"]
    },
    endDate: {
        type: Date,
        required: [true, 'end date is required'],
        validate: [dateValidator, 'End Date must be more than Start Date']
    },
    tickets: [
      {
        _id:{
          type: String,
          default: uuidv4()
        },
        type: {
          type: String,
        //   required: [true, "name is required"],
        },
        price: {
          type: Number,
        //   required: [true, "price is required"],
        },
        quota: {
          type: Number,
        //   required: [true, "quota is required"],
        },
      },
    ],
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

function dateValidator(value) {
    // `this` is the mongoose document
    let start = new Date (this.startDate)
    let end = new Date (value)
    if (start.getDate() >= end.getDate() && start.getMonth() == end.getMonth() ){
        return false
    }else {
        return true
    }
  }

const Checkout = mongoose.model("Event", schema, "events");
module.exports = Checkout;
