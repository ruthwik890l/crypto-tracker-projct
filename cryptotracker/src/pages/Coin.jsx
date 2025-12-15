import React, { useEffect ,useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Headerindex from "../compontes/common/Header/Headerindex";
import Loaderindex from "../compontes/common/Loader/Loaderindex";
import { coinObject } from "../functions/coinObject";
import Listindex from "../compontes/dashboard/List/Listindex";
import Coininfo from "../compontes/coin/Coininfor/Coininfo";
import BasicAreaChart from "../compontes/coin/Coininfor/Linechart/Linechart";

const useCoinData = (id) => {
  const [coinData, setCoinData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

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
  }, [id]);

  return { coinData, isLoading, error };
};

const useMarketData = (id, days) => {
  const [marketData, setMarketData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchMarketData = async () => {
      try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`);
        if (isMounted) {
          setMarketData(response.data.prices);
        }
      } catch (error) {
        if (isMounted) {
          setError(error.message);
        }
      }
    };

    if (id) {
      fetchMarketData();
    }

    return () => {
      isMounted = false;
    };
  }, [id, days]);

  return { marketData, error };
};

const Coin = () => {
  const { id } = useParams();
  const [days, setDays] = useState(30);  // Default to 30 days
  const { coinData, isLoading: isCoinLoading, error: coinError } = useCoinData(id);
  const { marketData, error: marketError } = useMarketData(id, days);

  if (isCoinLoading) {
    return <Loaderindex />;
  }

  if (coinError) {
    return <div>Error: {coinError}</div>;
  }

  // Format marketData for the chart
  const formattedMarketData = marketData
    ? marketData.map(([timestamp, price]) => ({
        date: new Date(timestamp).toLocaleDateString(),
        price,
      }))
    : [];

  return (
    <>
      <Headerindex />
      <div className="grey-wrapping">
        <Listindex coin={coinData} />
      </div>
      <div className="button-group" style={{ padding: '20px' }}>
        <button onClick={() => setDays(30)} style={{ marginRight: '10px' }}>Last 30 Days</button>
        <button onClick={() => setDays(90)} style={{ marginRight: '10px' }}>Last 90 Days</button>
        <button onClick={() => setDays(180)}>Last 180 Days</button>
      </div>
      {marketError ? (
        <div>Error: {marketError}</div>
      ) : (
        formattedMarketData.length > 0 && (
          <div className="graph" style={{ width: '100%' }}>
            <h3 className="market">Market Data</h3>
            <BasicAreaChart data={formattedMarketData} />
          </div>
        )
      )}
      {coinData.name && (
        <Coininfo heading={coinData.name} desc={coinData.desc} />
      )}
    </>
  );
};

export default Coin;