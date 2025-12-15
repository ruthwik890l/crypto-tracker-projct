import React from 'react';
import './Marquee.css'; // Ensure you have the CSS file in the same directory

const Marquee = () => {
  return (
    <>
      <section className="a-section">
        <div className="a-section-marquee-box">
        <h2 class="marquee-text">Stay ahead with the latest Bitcoin trends •</h2>
        <h2 class="marquee-text"> new opportunities in Ethereum investments •</h2>
        </div>
      </section>

      <section className="b-section">
        <div className="b-section-marquee-box">
        <h2 class="marquee-text">Explore the world of DeFi and crypto staking •</h2>
        <h2 class="marquee-text">Track the rise and fall of top altcoins daily •</h2>
        </div>
      </section>
    </>
  );
};

export default Marquee;
