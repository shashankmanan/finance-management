const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema(
  {
    symbol: {
      type: String,
      uppercase: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    buy_price: {
      type: Number,
      required: true,
      min: 0, 
    },
    quantity: {
      type: Number,
      required: true,
      min: 0, 
    }, 
    invested_amt : {
        type: Number
    }
    ,
    purchaseDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true } 
);

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;
