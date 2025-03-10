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
      trim: true,
    },
    buy_price: {
      type: Number,
      min: 0, 
    },
    quantity: {
      type: Number,
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
    category: {
      type:String 
    }
  },
  { timestamps: true } 
);

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;
