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
    try {
        
    } catch (error) {
        console.error("Error creating stocks:", error.message);
        return null;
    }
}

export {
    getAllBoughtStocksData
}