const {Router} = require("express")
const indexRouter = Router()

const transactionRouter = require("./transactionRoutes/transactionRouter")
const analyticsRouter = require("./analyticsRoutes/index")

indexRouter.use("/transaction", transactionRouter)
indexRouter.use("/analytics", analyticsRouter)


module.exports = indexRouter