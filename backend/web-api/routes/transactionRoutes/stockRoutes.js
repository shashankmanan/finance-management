const {Router} = require('express')
const stockRouter = Router()

const {getAllBoughtStocks,addBoughtStock,updateBoughtStock} = require("../../controllers/stocksController")

stockRouter.get("/purchased" , getAllBoughtStocks)
stockRouter.post("/add",addBoughtStock)
stockRouter.put("/update",updateBoughtStock)

module.exports = stockRouter