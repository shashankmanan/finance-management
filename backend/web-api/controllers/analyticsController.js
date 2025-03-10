const StockModel = require("../models/stockModel")
const EtfModel = require("../models/etfModel")
const axios = require("axios")
const dotenv = require("dotenv")

dotenv.config()

let {ANALYTICS_API_URL : baseURL} = process.env 

const getOverallAnalytics = async (request,response) => {

    const url = `${baseURL}analytics/overall`
    const stocks_list = await StockModel.find()
    const etfs_list = await EtfModel.find()
    const payload = {
        "stocks" : stocks_list ,
        "etfs" : etfs_list
    }
    
    const analytics = await axios.post(url,payload , {responseType: "arraybuffer"})
    const imageBase64 = Buffer.from(analytics.data , "binary").toString("base64");        
    response.json({
        "message": "OVERALL_ANALYTICS",
        "image": `data:image/jpeg;base64,${imageBase64}` // Embed Base64 image
    });
}

const getStockAnalytics = () => {}

const getEtfAnalytics = () => {}

module.exports = {
    getOverallAnalytics , getStockAnalytics , getEtfAnalytics
}