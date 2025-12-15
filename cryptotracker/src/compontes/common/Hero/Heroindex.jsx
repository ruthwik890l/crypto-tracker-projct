import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
// import video from '../../../assets/video.webm';

const Heroindex = () => {
  return (
    <div className='flex hero'>
        <div className="leftside">
            <video 
                src="https://coinstats.app/static/images/onboarding/profit-loss-banner.webm" 
                type="video/webm" 
                autoPlay 
                muted 
                loop 
                playsInline 
                width="100%" 
                height="auto">
                Your browser does not support the video tag.
            </video>
        </div>
        <div className="profitloss">
            <h1 className='porlos'>Get In-Depth Profit & Loss Analysis</h1>
            <p className='prolospara'>Connect your wallet to get 24h, daily, weekly and cumulative Profit & Loss analysis. <br /> Level up your crypto investing strategy.Connect Portfolio</p>
            <Link to="/dashboard"><button className="btnx">DashBoard</button></Link>
        </div>
    </div>
  );
}

export default Heroindex;
