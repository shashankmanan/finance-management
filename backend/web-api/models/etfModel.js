const mongoose = require("mongoose");

const etfSchema = new mongoose.Schema(
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

const ETF = mongoose.model("ETF", etfSchema);

module.exports = ETF;
