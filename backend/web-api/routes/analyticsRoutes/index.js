const {Router} = require("express")
const analyticsRouter = Router()

const {getOverallAnalytics,getEtfAnalytics,getStockAnalytics} = require("../../controllers/analyticsController")

analyticsRouter.get("/overall" , getOverallAnalytics)
analyticsRouter.get("/stocks",getStockAnalytics)
analyticsRouter.get("/etfs",getEtfAnalytics)

module.exports = analyticsRouter