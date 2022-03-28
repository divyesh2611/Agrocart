import React,{useState} from 'react'
import { Link } from 'react-router-dom'



export default function PlaceOrder ()  {
    
 
    const [user, setUser] = useState({
        address:"",
    })
    const handlechange = e => {
        const {name,value } = e.target 
        setUser({
          ...user,
          [name]:value  
        })
      } 
      const placeorder = () => {

        if(user.address){
            alert("Your Order Is Conform")
        }
        else
           alert("fill up the values")
    } 
  return (<>
            
            <section className= 'container order-container'>
                <div className='order'>
                    <h1>Order Page</h1>
                </div>
                <div className='order1'>
                   {/* <h1>Buyer Name:</h1>
                   <h3>Crop Name: </h3>
                   <h4>Crop Quantity:</h4>
                   <h5>Crop Price:</h5>
                   <h6>Date of Buying:</h6> */}
                   {/* <h7>Date of Shipping:</h7> */}
                  

                   <img src="./Images/CASH.jpg" alt="photosimg3" className="CASH" />



                </div>
                <div className="form-order">
                    <h1>Shipping Address:</h1>
                   
                </div>
                <div className='form-order1'>
                <input type="text" name='address' classname="address" placeholder="address"value={user.address} onChange={handlechange}/>
                </div>
                 
                <input className='checkbox' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                <label className='check1' for="vehicle1">Cash On Delivery</label><br></br>


                <input className='radio' type="radio" id="html" name="fav_language" value="HTML" />
                <label className='radio1' for="html">Arrange By Ownself</label><br></br>
                <input className='radio2' type="radio" id="html" name="fav_language" value="HTML" />
                <label className='radio3' for="html">Ask Transportation Facility to Admin</label><br></br>



                <button className="btn btn-payment" to='/Transportations' onClick={placeorder}>Place Order</button>
            </section> 

         </>
  )
}
