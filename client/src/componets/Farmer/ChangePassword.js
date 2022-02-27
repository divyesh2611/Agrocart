import React from 'react';

export default function ChangePassword ()  {
  const submit = () =>{
    alert("password is successfully change")
  }
  return(
        <>
           <section className='container pass-container'>
             <div className='pass'>
              <h1>Change Password</h1>
              <div className="form-group1">
              <label htmlFor="password">Current Password</label>
              <input type="password" name="email" placeholder="current password" />
            </div>
            <div className="form-group1">
              <label htmlFor="password">New Password</label>
              <input type="passowrd" name="password" placeholder="new password" />
            </div>
            <div className="form-group1">
              <label htmlFor="password">Confirm Password</label>
              <input type="tex" name="password" placeholder="confirm password" />
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


