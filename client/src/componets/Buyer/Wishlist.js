import React from 'react'
import { Link } from 'react-router-dom'
import {CartProvider,useCart} from 'react-use-cart'

export default function Wishlist  ()  {

  const {items,
         totalUniqueItems,
         isEmpty,
         totalItems,
         cartTotal,
         updateItemQuantity,
         removeItem,
         emptyCart
        } = useCart()
        if (isEmpty) return<h1 className='text-center'>your cart is empty</h1>
  console.log(items)

    return (<>
         <section className='container wishlist-container'>
               <div className='farmer'>
               <h1>Display Products</h1>
               </div> 
              <section className='py-4 containere'>
                <div className='row justify-content-center'>
                  <div className='col-12'>
                      <h5>cart({totalUniqueItems}) total items:({totalItems})</h5>
                      <table className='table table-light table-hover m-0'>
                          <tbody>
                           {items.map((item,index)=>{
                             return(
                             <tr key={index}>
                                <td>
                                  <img src={item.image} style={{height: '6rem'}} alt='image'/>
                                </td>
                                <td>{item.cropname}</td>
                                <td>{item.price}</td>
                                <td>Quantity({item.quantity})</td>
                                <td>
                                  <button className='btn btn-info ms-2'
                                  onClick={()=> updateItemQuantity(item.id,item.quantity -1)}
                                  >-</button>
                                  <button className='btn btn-info ms-2'
                                  onClick={()=> updateItemQuantity(item.id,item.quantity +1)}
                                  >+</button>
                                  <button className='btn btn-danger ms-2'
                                  onClick={()=>removeItem(item.id)}
                                  >Remove Item</button>
                                </td>
                             </tr>
                             )
                           })}
                           </tbody>
                      </table>
                  </div>
                  <div className='col-auto ms-auto'>
                      <h2>Total Price: {cartTotal}</h2>
                  </div>
                </div>
              </section> 
               
               <Link className="btn btn-buy" to='/PlaceOrder' >Place Order</Link>
            </section>
  
         </>
   
  )
}
