const {Router} = require('express')
const transactionRouter = Router()

const stockRouter = require("./stockRoutes")
const etfRouter = require("./etfRoutes")

transactionRouter.use("/stocks" , stockRouter)
transactionRouter.use("/etfs",etfRouter)

module.exports = transactionRouter