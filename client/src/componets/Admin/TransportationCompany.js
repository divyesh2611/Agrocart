import React from 'react';

export default function Transportation  ()  {
  return (
      <>
            <section className='container trans-container'>
              <div className='display7'>
                <h1>ADD TRANSPORTATION COMPANY</h1>
                <div className='form3'>
                <div className="form-group">
                    <label htmlFor="city">NAME OF THE COMPANY</label>
                    <input type="text" name="crop id" placeholder="Company name" />
                </div>
                <div className="form-group">
                    <label htmlFor="city">ADDRESS</label>
                    <input type="text" name="crop id" placeholder="Address" />
                </div>
                <div className="form-group">
                    <label htmlFor="city">CONTACT NO</label>
                    <input type="text" name="crop id" placeholder="Contact no" />
                </div>
                <div className="form-group">
                    <label htmlFor="city">CITY</label>
                    <input type="text" name="crop id" placeholder="City" />
                </div>
                <button className="btn  btn-style4" type="submit">ADD</button>
                </div>
              </div>
            </section>  
      </>
  )
}


