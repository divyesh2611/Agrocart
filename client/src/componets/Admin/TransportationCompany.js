import React, { useState } from 'react';
import axios from 'axios'
export default function Transportation ()  {
  const [transportation, setUser] = useState({
    companyname:"",
    address:"",
    city:"",
    contactno:"" 
  })


const handleonchange = e => {
  const {name,value } = e.target 
  setUser({
    ...transportation,
    [name]:value  
  })
} 
const submit = () => {
  const{companyname,address,city,contactno} = transportation

    console.log(JSON.stringify({companyname,address,city,contactno}))
    if(companyname && address && city && contactno )
      {
          // alert("valid")
          axios.post(" http://localhost:9002/uploadtransportation",transportation)
          .then ( res=> {
              {
                  if (res.data.message)
                  {

                      alert("order are placed  ")
                  }
                  
              }
              
          })
          
          setUser({
            companyname:"",
            address:"",
            city:"",
            contactno:"" 
          })
      }else{
          alert("Fill up complete form")

      }
}


  return (
      <>
            <section className='container upload-container'>
              <div className='display7'>
              
                <div className='form3'>
                <h1>ADD TRANSPORTATION COMPANY</h1>
                <div className="form-group">
                    <label htmlFor="city">NAME OF THE COMPANY</label>
                    <input type="text" name="companyname" placeholder="Company name" value={transportation.companyname} onChange={handleonchange} />
                </div>
                <div className="form-group">
                    <label htmlFor="city">ADDRESS</label>
                    <input type="text" name="address" placeholder="Address" value={transportation.address} onChange={handleonchange} />
                </div>
                <div className="form-group">
                    <label htmlFor="city">CONTACT NO</label>
                    <input type="text" name="contactno" placeholder="Contact no" value={transportation.contactno} onChange={handleonchange} />
                </div>
                <div className="form-group">
                    <label htmlFor="city">CITY</label>
                    <input type="text" name="city" placeholder="city" value={transportation.city} onChange={handleonchange} />
                </div>

                <button className="btn  btn-style4" type="submit" onClick={submit}>Submit</button>
                </div>
              </div>
            </section>  
      </>
  )
}


