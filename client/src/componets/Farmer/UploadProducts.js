import React from 'react';

export default function UploadProducts  ()  {
  return (
      <>
          <section className='container upload-container'>
              <div className='display-1'>
                 
              </div>
              <div className='form4'>
                   <div className='form-group4'>
                   <h1>Upload Product</h1>
                <label for="cars">Crop Name : </label>
             <select id="name" name="name">
             <option value="name"> </option>
             <option value="name">Wheat(ઘઉં)</option>
             <option value="name">Rice(ચોખા)</option>
             <option value="name">Sugarcane(શેરડી)</option>
             <option value="name">Soybean(સોયાબીન)</option>
             <option value="name">Peanuts(મગફળી)</option>
             <option value="name">Chickpeas(ચણા)</option>
             <option value="name">Sorghum(જુવાર)</option>
             </select>
            </div>
            <div className="form-group9">
              <label htmlFor="username">Farmer Name: </label>
              <input type="text" name="username" placeholder="" />
            </div>
            <div className="form-group10">
              <label htmlFor="City">City: </label>
              <input type="text" name="username" placeholder="" />
            </div>
            <div className="form-group5">
              <label htmlFor="username">Crop Quantity(Kg) :</label>
              <input type="text" name="username" placeholder="" />
            </div>
            <div className="form-group6">
              <label htmlFor="name">Crop Description : </label>
              <input type="text" name="email" placeholder="" />
            </div>
            <div className="form-group7">
              <label htmlFor="name">Crop Image : </label>
              
              </div>     
            <div className='form-group8'>
                <label htmlfor="name">Crop Price (Rs/Kg) : </label>
                <input type="text" name="email" placeholder="" />
            </div>  
            <button className="btn  btn-style8" type="submit">Submit</button>
              </div>
          </section>
      </>
  )
}
