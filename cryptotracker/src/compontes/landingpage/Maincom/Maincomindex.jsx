import React from "react";
import "./Maincomstyle.css";
// import Buttonindex from "../../common/Button/Buttonindex";
import iphone from "../../../assets/iphone.png";
import gradient from "../../../assets/gradient.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Maincomindex = () => {
  return (
    <div className="flex">
      <div className="leftcom">
        <motion.h1
          className="track"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="realtime"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.75, duration: 1 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="info"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Track cryto through a public api in real time. Vist the dashboard to
          do so!
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.75 }}
        >
          <Link to="/dashboard"><button className="btnx">DashBoard</button></Link>
          <button className="outline-btn">Share</button>
        </motion.div>
      </div>
      <motion.div
        className="phone"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.75 }}
      >
        <motion.img
          className="iphoneimg"
          src={iphone}
          alt=""
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />
        <img className="gradinent" src={gradient} alt="" />
      </motion.div>
    </div>
  );
};

export default Maincomindex;
