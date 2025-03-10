import axios from 'axios' 

const getAllBoughtEtfData = async () => {
    try {
        console.log("Fetching data...");
        const URL = "http://localhost:5004/api/transaction/etfs/purchased";
        const response = await axios.get(URL);
        console.log("Response received:", response.data);
        const {etfs_list} = response.data
        return etfs_list;
    } catch (error) {
        console.error("Error fetching stocks:", error.message);
        return null;
    }
};

const addAPurchasedEtf = async (payload) => {
    const BASE_URL = "http://localhost:5004/api/transaction/etfs/add"
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

const getTotalEtfInvestedAmount = async() => {
    const etfs_list = await getAllBoughtEtfData()
    let totalInvested = 0
    console.log(etfs_list)
    etfs_list.forEach(
        (i) => {
            totalInvested += i.invested_amt
        }
    )
    console.log(totalInvested)
    totalInvested = parseFloat(totalInvested.toFixed(2))
    return totalInvested
}

export {
    getAllBoughtEtfData ,
    addAPurchasedEtf ,
    getTotalEtfInvestedAmount
}