const MutualFunds = require("../models/mfModel")

const getAllMf = async (request,response) => {
    const mf_list = await MutualFunds.find()
    console.log("GET-show_all_stocks")
    response.status(200).json({
            "status" : 200 ,
            "method" : "GET" ,
            "func" : "show-all-stocks" , 
            "mf_list" : mf_list
        })
}

const addAMf = async (request,response) => {
    console.log("POST-add_MF")
    let message = ""    
        if(request.body.name == null)
            message = {
                "status" : 400 , 
                "method" : "post" ,
                "err_message" : "PARAMETER_MISSING" ,
                "reason" : "specify all the parameters while making a post request"
            }
        else {    
        const data = {
            "name" : request.body.name ,
            "invested_amt" : request.body.invested_amt || 0  ,
            "category" : request.body.category || ""
         }
         console.log(data)
        const add_mf = await MutualFunds.create(data)
        
        if(add_mf) 
            message = {
                "status" : 201 ,
                "method" : "post" ,
                "message" : "created"
            }
        else
            message = {
                "status" : 400 ,
                "method" : "post" ,
                "message" : "failed" ,
                "reason" : "something_went_wrong"
            }
        }  
        console.log(message , request.body)
        response.status(message.status).json(message)
}

const updateMf= async (request,response) => {}

module.exports = {
    getAllMf , 
    addAMf 
}