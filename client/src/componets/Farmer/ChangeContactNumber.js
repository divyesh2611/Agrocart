import React from 'react';
import { useState } from 'react';

export default function ChangeContactNumber ()  {
  
  const [user, setUser] = useState({
    currentnumber:"",
    newnumber:"",
    cnewnumber:""
  })
  const handlechange = e => {
    const {name,value } = e.target 
    setUser({
      ...user,
      [name]:value  
    })
  }  
    const submit = () => {
      const{currentnumber,newnumber,cnewnumber} = user
  
        console.log(JSON.stringify({currentnumber,newnumber,cnewnumber}))
        alert("contactNumber is successfully change")
    }    
  return (

      <>
           <section className='container pass-container'>
             <div className='pass'>
              <h1>Change Contact Number</h1>
              <div className="form-group1">
              <label htmlFor="password">Current Contact Number</label>
              <input type="text" name="currentnumber" placeholder="current number"value={user.currentnumber} onChange={handlechange} />
            </div>
            <div className="form-group1">
              <label htmlFor="password">New Contact Number</label>
              <input type="text" name="newnumber" placeholder="new number" value={user.newnumber} onChange={handlechange} />
            </div>
            <div className="form-group1">
              <label htmlFor="password">Confirm Contact Number</label>
              <input type="text" name="cnewnumber" placeholder="confirm number"value={user.cnewnumber} onChange={handlechange} />
            </div>
            <div className="btn6">
          <button type="button" className="btn" onClick={submit}>
            Submit
          </button>
        </div>
             </div>
           </section>
      </>
  )
}
