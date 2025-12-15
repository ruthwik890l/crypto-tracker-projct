import React, { useEffect, useState } from "react";
import Headerindex from "../compontes/common/Header/Headerindex";
import Tabs from "../compontes/dashboard/Tabs/Tabs";
import axios from "axios";
import Search from "../compontes/dashboard/Search/Search";
import Pageindex from "../compontes/dashboard/Pagenations/Pageindex";
import Loaderindex from "../compontes/common/Loader/Loaderindex";
import Backtotop from "../compontes/common/Backtotop/Backtotop";

const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isloading, setisloading] = useState(true);

  // Handle page change
  const handlePageChange = (event, value) => {
    setPage(value);
    const previousIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 10));
  };

  // Handle search input change
  const onSearchChange = (e) => {
    setSearch(e.target.value); // Ensure search state updates correctly
  };

  // Fetch initial data from CoinGecko API on component mount
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        console.log("RESPONSE>>>", response.data);
        setCoins(response.data);
        setPaginatedCoins(response.data.slice(0, 10)); // Initialize paginatedCoins correctly
        setisloading(false)
      })
      .catch((error) => {
        console.log("ERROR>>>", error.message);
      });
  }, []); // Empty dependency array to fetch data only once on mount

  // Filter coins based on search input
  const filteredCoins = coins.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Headerindex />
      <Backtotop/>
      {isloading ? (
        <Loaderindex />
      ) : (
        <div>
          <Search search={search} onSearchChange={onSearchChange} /> {/* Ensure props are correctly passed */}
          <Tabs coins={search ? filteredCoins : paginatedCoins} /> {/* Ensure correct path and props */}
          <Pageindex page={page} handleChange={handlePageChange} /> {/* Ensure correct path and props */}
        </div>
      )}
    </>
  );
};


export default Dashboard;
