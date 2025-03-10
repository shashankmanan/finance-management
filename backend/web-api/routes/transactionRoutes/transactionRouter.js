const {Router} = require('express')
const transactionRouter = Router()

const stockRouter = require("./stockRoutes")
const etfRouter = require("./etfRoutes")
const mfRouter = require("./mfRoutes")

transactionRouter.use("/stocks" , stockRouter)
transactionRouter.use("/etfs",etfRouter)
transactionRouter.use("/mfs",mfRouter)

module.exports = transactionRouter