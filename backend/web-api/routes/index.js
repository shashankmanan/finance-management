const {Router} = require("express")
const indexRouter = Router()

const transactionRouter = require("./transactionRoutes/transactionRouter")

indexRouter.use("/transaction", transactionRouter)



module.exports = indexRouter