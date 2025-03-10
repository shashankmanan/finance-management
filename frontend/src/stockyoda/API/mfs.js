import axios from 'axios' 

const getAllBoughtMfData = async () => {
    try {
        console.log("Fetching data...");
        const URL = "http://localhost:5004/api/transaction/mfs/purchased";
        const response = await axios.get(URL);
        console.log("Response received:", response.data);
        const {mf_list} = response.data
        return mf_list;
    } catch (error) {
        console.error("Error fetching mutual funds:", error.message);
        return null;
    }
};

const addAPurchasedMf = async (payload) => {
    const BASE_URL = "http://localhost:5004/api/transaction/mfs/add"
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

const getTotalMfInvestedAmount = async() => {
    const mf_list = await getAllBoughtMfData()
    let totalInvested = 0

    mf_list.forEach(
        (i) => {
            totalInvested += i.invested_amt
        }
    )
    console.log(totalInvested)
    totalInvested = parseFloat(totalInvested.toFixed(2))
    return totalInvested
}

export {
    getAllBoughtMfData,getTotalMfInvestedAmount,addAPurchasedMf
}