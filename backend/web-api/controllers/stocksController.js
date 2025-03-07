const Stock = require("../models/stockModel")

const getAllBoughtStocks = async (request,response) => {
    const stocks_list = await Stock.find()
    response.status(200).json({
        "status" : 200 ,
        "method" : "GET" ,
        "func" : "show-all-stocks" , 
        "stocks-list" : stocks_list
    })
}

const addBoughtStock = async (request,response) => {
    if(request.body.name == null || request.body.buy_price == null || request.body.quantity == null)
        response.status(400).json({
            "status" : 400 , 
            "method" : "post" ,
            "err_message" : "PARAMETER_MISSING" ,
            "reason" : "specify all the parameters while making a post request"
        })

    const data = {
        "name" : request.body.name ,
        "buy_price" : request.body.buy_price ,
        "quantity": request.body.quantity ,
        "invested_amt" : request.body.invested_amt || request.body.buy_price * request.body.quantity  
    }
    const add_stock = await Stock.create(data)
    if(add_stock) 
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

const updateBoughtStock = async (request,response) => {
    response.json({
        "status" : 200 ,
        "method" : "PUT" ,
        "func" : "update-stock"
    })
}


module.exports = {
    getAllBoughtStocks,addBoughtStock,updateBoughtStock
}