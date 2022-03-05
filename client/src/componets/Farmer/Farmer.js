import React from 'react';
import { Link } from 'react-router-dom';

export default function Farmer  ()  {
  return (
        <>
            <section className='container farmer-container'>
                <div className='display-8'>
                    <h1>Welcome To The Web Page For Farmer </h1>
                    <h2>"A Farmer is a megicine who produces money from the mud"</h2>
                </div>
                </section>
                <div className='btn5'>
                <form className='f-flex'>
                <Link className="btn btn-style5" to='/UpdateProfile'>Update Profile</Link>
                <Link className="btn btn-style6" to='/UploadProducts'>Upload Products</Link>
                <Link className="btn btn-style6" to='/DisplayProducts'>Display Upload Products</Link>
                <Link className="btn btn-style6" to='/BuyerDetails'>Buyer Details</Link>
                </form>
                <div className='main-herosection-images'>
                <img src='./Images/farmer1.jpg' alt='photosimg1' className='img1'/>
                <img src='./Images/farmer2.jpg' alt='photosimg1' className='img1'/>
                <img src='./Images/farmer3.jpg' alt='photosimg1' className='img1'/>
                <img src='./Images/farmer4.jpg' alt='photosimg1' className='img1'/>
                <img src='./Images/farmer5.jpg' alt='photosimg1' className='img1'/>
                <img src='./Images/farmer6.jpg' alt='photosimg1' className='img1'/>
                </div>
            </div>

            <div className='container features-container'>
                <h1>Standout Features</h1>
            </div>
            <div className='row justify-content-md-center'>
            <div class="card" >
                          <p class="aligncenter">
                               <img class="img6" src="../Images/handshake.png" alt="Card image cap" width="250px" height="200px"/>
                          </p>
                          <div class="card-body">
                               <h4 class="card-title font-weight-bold">Buyer Connection</h4>
                               <br/>
                               <h5 class="card-text">Get in direct touch with the buyer to satisfy its need </h5>
                          </div>
                     </div>

                     <div class="card mx-4">
                          <p class="aligncenter">
                               <img class="card-img-top image" src="../Images/farmer.png" alt="Card image cap" width="250px" height="200px"/>
                          </p>
                          <div class="card-body">
                               <h4 class="card-title font-weight-bold">Farmer Group Formation</h4>
                               <br/>
                               <h5 class="card-text">Get in touch with other farmers making your own community where you can ask for help</h5>
                          </div>
                     </div>
                     </div>
        </>

  )
}
