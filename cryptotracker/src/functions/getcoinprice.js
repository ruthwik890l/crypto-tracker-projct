import axios from "axios";

export const getcoinprice = async (id, days) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
    );
    console.log("prices", response.data.prices);
    return response.data.prices; // Return prices array from the response
  } catch (error) {
    console.error("Error fetching coin prices:", error.message);
    throw error; // Propagate the error for handling in the component
  }
};
