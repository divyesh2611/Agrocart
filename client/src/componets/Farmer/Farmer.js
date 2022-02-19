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
                <button className="btn btn-style6" to='/DisplayProducts'>Display Upload Products</button>
                <button className="btn btn-style6" to='/BuyerDetails'>Buyer Details</button>
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
        </>

  )
}
