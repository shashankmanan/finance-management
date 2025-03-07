const {Router} = require('express')
const transactionRouter = Router()

const stockRouter = require("./stockRoutes")

transactionRouter.use("/stocks" , stockRouter)


module.exports = transactionRouter