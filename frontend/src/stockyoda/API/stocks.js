import axios from 'axios' 

const getAllBoughtStocksData = async () => {
    try {
        console.log("Fetching data...");
        const URL = "http://localhost:5000/api/transaction/stocks/purchased";
        const response = await axios.get(URL);
        console.log("Response received:", response.data);
        const {stocks_list} = response.data
        return stocks_list;
    } catch (error) {
        console.error("Error fetching stocks:", error.message);
        return null;
    }
};

const addAPurchasedStock = async (payload) => {
    const BASE_URL = "http://localhost:5000/api/transaction/stocks/add"
    try {
        console.log("sending request")
        console.log(payload)
        const request = await axios.post(BASE_URL,payload)
        console.log(request)
        if(request.status == 201)
            return "SUCCESFULLY_CREATED"
    } catch (error) {
        console.error("Error creating stocks:", error.message);
        return null;
    }
}

const getTotalStockInvestedAmount = async() => {
    const stock_list = await getAllBoughtStocksData()
    let totalInvested = 0
    console.log(stock_list)
    stock_list.forEach(
        (i) => {
            totalInvested += i.invested_amt
        }
    )
    console.log(totalInvested)
    totalInvested = parseFloat(totalInvested.toFixed(2))
    return totalInvested
}

export {
    getAllBoughtStocksData,
    addAPurchasedStock ,
    getTotalStockInvestedAmount
}