import React from 'react'
import './Hero2index.css'
import { Link } from 'react-router-dom'

const Hero2index = () => {
  return (
    <div className='flex'>
        <div className="buyswapcrypto">
            <h1 className='buyswap'>Buy & Swap Crypto Where You Track It</h1>
            <p className='prolospara'>Purchase crypto with card in just a few steps. Then swap on best terms to keep up with trends.</p>
            <Link to="/dashboard"><button className="btnx">DashBoard</button></Link>
        </div>
        <div className="rightside">
            <img src="https://cdn.prod.website-files.com/65098a145ece52db42b9c274/65686b3be30ab8d11f90a57b_blockpit-taxreport-guide.png" alt="" />
        </div>
    </div>
  )
}

export default Hero2index