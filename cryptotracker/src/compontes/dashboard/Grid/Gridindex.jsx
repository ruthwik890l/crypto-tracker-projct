import React from 'react';
import './Gridstyle.css';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Gridindex = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
    <motion.div className={`grid-container ${coin.price_change_percentage_24h < 0 ? "grid-container-red" : ""}`} initial={{ opacity: 0, x: -50 }}
animate={{ opacity: 1, x: 0 }}
transition={{ delay: 0.5, duration: 1 }}>
      <div className="info-flex">
        <img src={coin.image} className='coin-image' alt={`${coin.name} logo`} />
        <div className='name-col'>
          <p className='coin-symbol'>{coin.symbol}</p>
          <p className='coin-name'>{coin.name}</p>
        </div>
      </div>
      {coin.price_change_percentage_24h > 0 ? (
        <div className='chip-flex'>
          <div className="price-chip">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className='icon-chip'>
            <TrendingUpRoundedIcon/>
            </div>
        </div>
      ) : (
        <div className='chip-flex'>
          <div className="price-chip chip-red">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className='icon-chip cheap-red'>
            <TrendingDownRoundedIcon/>
            </div>
        </div>
      )}
      <div className='info-container'>
        <h3 className='coin-price' style={{color:coin.price_change_percentage_24h < 0? "var(--red)":"var(--green)"}}>${coin.current_price.toLocaleString()}</h3>
        <p className='total-volume'>Total Volume: {coin.total_volume.toLocaleString()}</p>
        <p className='total-volume'>Market Cap: {coin.market_cap.toLocaleString()}</p>
      </div>
    </motion.div>
    </Link>
  );
};

export default Gridindex;
