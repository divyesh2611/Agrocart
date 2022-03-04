import React from 'react';
import { Link } from 'react-router-dom';

export default function Admin  () {
  return (
      <>
          <section className='container admin-container'>
                 <div className='display9'>
                     <h1>Farmer's Market</h1>
                    <h2>For Better and Clear Maeketing</h2>
                <div className='admin-herosection-images'>
                <img src='./Images/photo11.jpg' alt='photosimg1' className='img'/>
                <img src='./Images/photo11.jpg' alt='photosimg2' className='img'/>
                <img src='./Images/photo11.jpg' alt='photosimg3' className='img'/>
                <img src='./Images/photo11.jpg' alt='photosimg4' className='img'/>
                </div>
                <div className='btn3'>
                <form className="a-flex">
                {/* <Link className="btn btn-style1" to='/AddCrop'>Add Crops</Link> */}
                <Link className="btn btn-style1" to='/FarmerInfo'>USERS Details</Link>
                {/* <Link className="btn btn-style1" to='/BuyerInfo'>Buyer Details</Link> */}
                <Link className="btn btn-style1" to='/Transaction'>Transaction Details</Link>
                <Link className="btn btn-style1" to='/TransportationCompany'>Transportation</Link>
                <button className="btn  btn-style1" type="submit" >Log Out</button>
                </form>
                </div>
              </div>

              
          </section>
      </>
  )
}



