import React from "react";
import "./Liststyle.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { convertNumber } from "../../../functions/convertNumber";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Listindex = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
    <motion.tr className="list-row" initial={{ opacity: 0, x: -50 }}
animate={{ opacity: 1, x: 0 }}
transition={{ delay: 0.5, duration: 1 }}>
      <td className="td-image">
        <img
          src={coin.image}
          className="coin-image tdimage"
          alt={`${coin.name} logo`}
        />
        </td>
        <td>
        <div className="name-col">
          <p className="coin-symbol coinlistsymbol">{coin.symbol}</p>
          <p className="coin-name coinnamelist">{coin.name}</p>
        </div>
      </td>
      {coin.price_change_percentage_24h > 0 ? (
        <td className="chip-flex">
          <div className="price-chip pricelistchip">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="icon-chip td-icon">
            <TrendingUpRoundedIcon />
          </div>
        </td>
      ) : (
        <td className="chip-flex">
          <div className="price-chip chip-red pricelistchip">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="icon-chip cheap-red td-icon">
            <TrendingDownRoundedIcon />
          </div>
        </td>
      )}
      <td>
        <h3
          className="coin-price td-centeraligen"
          style={{
            color:
              coin.price_change_percentage_24h < 0
                ? "var(--red)"
                : "var(--green)",
          }}
        >
          ${coin.current_price.toLocaleString()}
        </h3>
      </td>
      <td>
        <p className="total-volume td-rightaligin td-vol">
          {coin.total_volume.toLocaleString()}
        </p>
      </td>
      <td className="destop-id-mkt">
        <p className="total-volume td-rightaligin">
          {coin.market_cap.toLocaleString()}
        </p>
      </td>
      <td className="mobil-id-mkt">
        <p className="total-volume td-rightaligin">
          {convertNumber(coin.market_cap)}
        </p>
      </td>
    </motion.tr>
    </Link>
  );
};

export default Listindex;
