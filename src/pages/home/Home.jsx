import React from 'react'

import Chart from '../../components/charts/Chart'
 import Navbar from '../../components/navbar/Navbar'
import Order from '../../components/order/Order'
import Sidebar from '../../components/sidebar/Sidebar'
//import Table from '../../components/table/table'
 import Usercard from '../../components/usercard/Usercard'
import './Home.scss'

const cardContent = [
    {
      amount: '2,342',
      description: 'Daily Transaction Volume',
    },
    {
      amount: '4,000,000',
      description: 'Daily Transaction Value',
    },
    {
      amount: '452,000',
      description: 'Total Transaction Volume',
    },
    {
      amount: '4,000,000',
      
      description: 'Total Transaction Value',
    },
  ]


function Home() {
  return (
    <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="cards">
            {cardContent.map((content) => (
              <Usercard
                amount={content.amount}
                description={content.description}
              />
            ))}
            </div>
            <div className="transaction-info">
            <Chart />
            <div className="order-info">
              <Order
                transactionType="Orders"
                PendingOrders="Pending Orders"
                pendingCount="20"
                reconciledOrders="Reconciled orders"
                ReconciledCount="80"
                totalOrder="Total orders"
                totalCount="100"
              />
              <Order
                transactionType="Payments"
                PendingOrders="Un-reconciled Payments"
                pendingCount="20"
                reconciledOrders="Reconciled Payments"
                ReconciledCount="80"
                totalOrder="Total Payments"
                totalCount="100"
              />
            </div>
            </div>

            </div>
            </div>
  )
}

export default Home