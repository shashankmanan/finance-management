const mongoose = require("mongoose");

const mfSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    }, 
    invested_amt : {
        type: Number
    } ,
    category: {
        type:String 
    }
  },
  { timestamps: true } 
);

const MutualFunds = mongoose.model("MutualFunds", mfSchema);

module.exports = MutualFunds;
