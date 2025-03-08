const ETF = require("../models/etfModel")

const getAllBoughtEtfs = async (request,response) => {
    const etfs_list = await ETF.find()
    console.log("GET-show_all_etfs")
    response.status(200).json({
        "status" : 200 ,
        "method" : "GET" ,
        "func" : "show-all-etfs" , 
        "etfs_list" : etfs_list
    })
}

const addBoughtEtf = async (request,response) => {
    console.log("POST-add_etf")
        if(request.body.name == null || request.body.buy_price == null || request.body.quantity == null)
            response.status(400).json({
                "status" : 400 , 
                "method" : "post" ,
                "err_message" : "PARAMETER_MISSING" ,
                "reason" : "specify all the parameters while making a post request"
            })
    
        const data = {
            "symbol" : request.body.symbol || "" ,
            "name" : request.body.name ,
            "buy_price" : request.body.buy_price ,
            "quantity": request.body.quantity || 0,
            "invested_amt" : request.body.invested_amt || request.body.buy_price * request.body.quantity  ,
            "purchaseDate" : request.body.purchaseDate || null ,
            "category" : request.body.category || "others"
        }
        const add_etf = await ETF.create(data)
        if(add_etf) 
            response.status(201).json({
                "status" : 200 ,
                "method" : "post" ,
                "message" : "created"
            })
        else
            response.status(400).json({
                "status" : 400 ,
                "method" : "post" ,
                "message" : "failed" ,
                "reason" : "something_went_wrong"
            })
}

const updateEtf = () => {}

module.exports = {
    getAllBoughtEtfs, addBoughtEtf , updateEtf
}