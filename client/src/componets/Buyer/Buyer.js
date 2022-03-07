import React from 'react'
import { Link } from 'react-router-dom'

export default function Buyer  ()  {
  return (
      <>
        <section className='container buyer-container'>
     
          <div className='buyer-display'>
          <header>
             <h1>Welcome To The Web Page For Buyer</h1>
             <img src='./Images/buyer1.jpg' alt='photosimg3' className='img1'/>
             <img src='./Images/buyer2.jpg' alt='photosimg3' className='img2'/>
             <img src='./Images/buyer3.jpg' alt='photosimg3' className='img3'/>
             <h2>The Following Products are available for sale. Enjoy shopping</h2>
             <Link className="btn btn-buyer" to='/WishList'>Cart</Link>
            
          </header>
          </div>
         

        </section>
    </>
  )
}
