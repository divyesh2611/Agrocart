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
                                  <img src={item.image} style={{height: '6rem'}}/>
                                </td>
                                <td>{item.cropname}</td>
                                <td>{item.price}</td>
                                <td>Quantity({item.cropQuantity})</td>
                                <td>
                                  <button className='btn btn-info ms-2'
                                  onClick={()=> updateItemQuantity(item.id,1 -1)}
                                  >-</button>
                                  <button className='btn btn-info ms-2'
                                  onClick={()=> updateItemQuantity(item.id,1 +1)}
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

                </div>
              </section> 
               
               <Link className="btn btn-buy" to='/PlaceOrder'>Place Order</Link>
            </section>
  
         </>
   
  )
}
