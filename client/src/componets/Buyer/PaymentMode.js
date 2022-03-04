import React from 'react'

export default function PaymentMode ()  {
  return (
      <div className='container payment-container'>
            <div className='payment'>
                <h1>Pay With Card</h1>
            </div>
            <div className='pay'>
                <h1>Enter Card Number:</h1>
               
            </div>
            <div className='pay1'>
            <input type="text" classname="address" placeholder="address" />
            </div>
      </div>
      
  )
}
