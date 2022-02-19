import React from 'react';

export default function ChangeContactNumber ()  {
  return (
      <>
           <section className='container pass-container'>
             <div className='pass'>
              <h1>Change Contact Number</h1>
              <div className="form-group1">
              <label htmlFor="password">Current Contact Number</label>
              <input type="text" name="email" placeholder="current number" />
            </div>
            <div className="form-group1">
              <label htmlFor="password">New Contact Number</label>
              <input type="text" name="password" placeholder="new number" />
            </div>
            <div className="form-group1">
              <label htmlFor="password">Confirm Contact Number</label>
              <input type="text" name="password" placeholder="confirm number" />
            </div>
            <div className="btn6">
          <button type="button" className="btn">
            Submit
          </button>
        </div>
             </div>
           </section>
      </>
  )
}
