import React from "react";
import "./Footerstyle.css";

const Footerindex = () => {
  return (
    <div>
      <div className="mainbox">
        <div className="box1">
          <h2>Address</h2>
          <p>11-114,yerrabalem</p>
          <p>Mangalagiri</p>
          <p>Guntur</p>
          <p>Andhra Pradesh</p>
        </div>
        <div className="box2">
          <h2> Contact Information</h2>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address</p>
        </div>
        <div className="box3">
          <h2>Social Media</h2>
          <p>Follow us on Twitter: <a href="">@CryptoTracker</a></p>
          <p>Like us on Facebook: <a href="">CryptoTrackerFB</a></p>
          <p>Connect on LinkedIn: <a href="www.linkedin.com/in/balu-eswar-meduri-28867b286">CryptoTrackerLinkedIn</a> </p>
        </div>

      </div>
      <div className="footer">Copyright © 2025, All Right Reserved By Ruthwik</div>
    </div>
  );
};

export default Footerindex;
