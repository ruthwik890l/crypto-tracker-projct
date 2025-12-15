import axios from "axios";

export const getCoinData = (id) =>{
  const fetchCoinData = async () => {
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
      if (isMounted) {
        coinObject(setCoinData, response.data);
        setIsLoading(false);
      }
    } catch (error) {
      if (isMounted) {
        setError(error.message);
        setIsLoading(false);
      }
    }
  };

  if (id) {
    fetchCoinData();
  }

  return () => {
    isMounted = false;
  };
}