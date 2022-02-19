import React from 'react';
import { Link } from 'react-router-dom';

export default function UpdateProfile ()  {
  return (
      <>
          <section className='container update-container'>
                <div className='display-9'>
                  <h1>General Account Settings:</h1>
                </div>
                <div className='link'>
                  <Link to="/ChangePassword">Change Password</Link>
                </div>
                <div className='link1'>
                  <Link to="/ChangeContactNumber">Change Contact Number</Link>
                </div>
                <div className='update-herosection-images'>
                   <img src='./Images/account.png' alt='photosimg' className='img'/>
                </div>
          </section>
      </>
  )
}


