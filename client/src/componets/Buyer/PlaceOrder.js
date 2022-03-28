import React from 'react'
import { Link } from 'react-router-dom'


export default function PlaceOrder (props)  {
  return (<>
            
            <section className= 'container order-container'>
                <div className='order'>
                    <h1>Order Page</h1>
                </div>
                <div className='order1'>
                   <h1>Buyer Name:</h1>
                   <h3>Crop Name: </h3>
                   <h4>Crop Quantity:</h4>
                   <h5>Crop Price:</h5>
                   <h6>Date of Buying:</h6>
                   <h7>Date of Shipping:</h7>
                  
                </div>
                <div className="form-order">
                    <h1>Shipping Address:</h1>
                   
                </div>
                <div className='form-order1'>
                <input type="text" classname="address" placeholder="address" />
                </div>
                <Link className="btn btn-payment" to='/PaymentMode'>Process to Payment</Link>
            </section> 

         </>
  )
}
