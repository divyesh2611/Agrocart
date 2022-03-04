import React from 'react'
import { Link } from 'react-router-dom'

export default function Wishlist  ()  {
  return (<>
         <section className='container wishlist-container'>
               <div className='farmer'>
               <h1>Display Products</h1>
               </div> 
               <section className='list-product'>
               <div className='list'>
                 <h2> </h2>
                 <h2>Farmername</h2>
                 <h2>Username</h2>
                 {/* <h2>Date</h2>
                 <h2>City</h2> */}
                 <h2>Cropname</h2>
                 <h2>CropQuantity(kg)</h2>
                 <h2>CropDesc</h2>
                 {/* <h2>CropImg</h2> */}
                 <h2>CropPrice(Rs/kg)</h2>
                 <h2> </h2>
               </div>
               </section>
               <Link className="btn btn-buy" to='/PlaceOrder'>Place Order</Link>
            </section>
  
         </>
   
  )
}
