const {Router} = require('express')
const mfRouter = Router()

const {getAllMf,addAMf} = require("../../controllers/mfController")

mfRouter.get("/purchased" , getAllMf);
mfRouter.post("/add",addAMf)

module.exports = mfRouter