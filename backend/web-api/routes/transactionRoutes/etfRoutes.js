const {Router} = require('express')
const etfRouter = Router()

const {getAllBoughtEtfs,addBoughtEtf,updateEtf} = require("../../controllers/etfController")

etfRouter.get("/purchased" , getAllBoughtEtfs)
etfRouter.post("/add",addBoughtEtf)
etfRouter.put("/update",updateEtf)

module.exports = etfRouter