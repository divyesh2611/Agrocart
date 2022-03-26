import React from 'react'
import { Link } from 'react-router-dom'
import {CartProvider,useCart} from 'react-use-cart'

export default function Wishlist  ()  {

  const {items,
         totalUniqueItems
        } = useCart()
  console.log(items)

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
               <h2>{totalUniqueItems}</h2>
               <Link className="btn btn-buy" to='/PlaceOrder'>Place Order</Link>
            </section>
  
         </>
   
  )
}
