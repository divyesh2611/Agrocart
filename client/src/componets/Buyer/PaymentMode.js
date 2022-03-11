import React from 'react'
import { Link } from 'react-router-dom';
import styles from './mystyles.modules.css';





export default function PaymentMode ()  {
  return (<>
      {/* <div className="wrapper">
      <div class="text-uppercase"><h1>Payment Details</h1></div>
      <form class="form mt-4">
      <div classname="form-group1"> <label for="name" classname="text-uppercase">name on the card</label> <input type="text" classname="form-control1" placeholder="Enter Holder Name" /> </div>
      </form> */}
      {/* <div className='container payment-container'>
            <div className='payment'>
                <h1>Pay With Card</h1>
            <div className='pay'>
                <h1>Enter Card Number:</h1>
               </div>
            </div>
            <div className='pay1'>
            <input type="text" classname="address" placeholder="address" />
            </div>
      </div> */}
      {/* </div> */}
      
 

<div class="wrapper">
    <div class="text-uppercase"><h1>Payment Details</h1></div>
    <form class="form mt-4 hello">
        <div class="form-group"> <label1 for="name" class="text-uppercase">name on the card</label1> <input type="text" class="form-control" placeholder="Enter Holder Name" /> </div>
        <div class="form-group"> <label1 for="card" class="text-uppercase">card number</label1>
            <div class="card-number"> <input type="text" class="card-no" step="4" placeholder="1234 4567 5869 1234" pattern="^[0-9].{15,}" /> <span class=""> <img src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-marcus-samuelsson-group-2.png" alt="" width="30" height="30" /> </span> </div>
        </div>
        <div class="d-flex w-100">
            <div class="d-flex w-50 pr-sm-4">
                <div class="form-group"> <label1 for="expiry" class="text-uppercase">exp.date</label1> <input type="text" class="form-control" placeholder="03/2020" /> </div>
            </div>
            <div class="d-flex w-50 pl-sm-5 pl-3">
                <div class="form-group"> <label1 for="cvv">CVV</label1> <a href="#" title="CVV is a credit or debit card number, the last three digit number printed on the signature panel"></a> <input type="password" class="form-control pr-5" maxlength="3" placeholder="123" /> </div>
            </div>
        </div>
       
        {/* <div class="my-3 mx-auto"> <input type="submit" value="place your order" class="text-uppercase btn btn-primary btn-block p-3" /> </div> */}
        <div class="my-3 mx-auto"> <Link class='text-uppercase btn btn-primary btn-block p-3' to='/Transportations'>Place Your Order</Link> </div>
    </form>
</div>


  </>    
  )
}
