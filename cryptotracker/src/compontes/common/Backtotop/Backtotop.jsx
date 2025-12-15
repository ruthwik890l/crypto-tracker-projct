import React, { useEffect } from 'react';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import './Backtotop.css';

const Backtotop = () => {
  useEffect(() => {
    const mybutton = document.getElementById("top-btn");

    const scrollFunction = () => {
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = "flex";
      } else {
        mybutton.style.display = "none";
      }
    };

    window.addEventListener('scroll', scrollFunction);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', scrollFunction);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='back-to-top' id='top-btn' onClick={handleScrollToTop}>
       <ArrowUpwardRoundedIcon style={{ color: "var(--blue)", height: "2rem" }} />
    </div>
  );
}

export default Backtotop;
