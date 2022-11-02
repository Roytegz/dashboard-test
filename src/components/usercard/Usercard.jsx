import React from 'react'
import './Usercard.scss'

const Usercard = ({ description, amount }) => {
  return (
    <div className="card-wrapper">
      <div className="cards">
        <div className="card-box">
          <div className="card-info">
            <p className="desc">{description}</p>
            <span className="amount">{amount}</span>
          </div>
          <div className="card-icon">
            <img src="./images/smallchart.png" alt="small Chart" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Usercard