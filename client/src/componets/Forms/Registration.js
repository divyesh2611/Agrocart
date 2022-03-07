import React, {useState} from 'react'
// import {useHistory} from "react-router-dom"
import {useNavigate} from 'react-router-dom';
import axios from "axios" ;
import Select from 'react-select'



export default function Registration() {

  // var role =[
  //   {
  //     value:1,
  //     label:"admin"
  //   },
  //   {
  //     value:2,
  //     label:"farmer"
  //   },
  //   {
  //     value:3,
  //     label:"buyer"
  //   }
    
  // ];
  // var changerole = (e) =>{

  // }
  // let history = useHistory()
  const navigate = useNavigate();
  
  
  const [user, setUser] = useState({
    role:"farmer",
    username:"",
    email:"",
    city:"",
    district:"",
    state:"",
    country:"",
    pincode:"",
    contactno:"",
    adharno:"",
    password:""
  })
  const handlechange = e => {
    const {name,value } = e.target 
    setUser({
      ...user,
      [name]:value  
    })
  } 
  const submit = () => {
    const{ role, username, email, city, district, state, country, pincode, contactno,adharno, password } = user

      console.log(JSON.stringify({role,username, email, city, district, state, country, pincode, contactno,adharno, password}))
      if(role && username && email && city &&  district &&  state && country && pincode && contactno && adharno && password )
        {
          console.log(user)
           // alert("valid")
            axios.post("http://localhost:9002/register",user)
            .then ( res => {
                
                    if (res.data.message)
                    {

                      if (res.data.isUser) {
                        alert("User already Registered")
                      } 
                      else {
                        alert("Successfully Registered , Please Login Now")
                      }

                        
                        // history.push("/login") 
                        navigate("/Login");

                    }
                    
                
                
            })
        }else{
            alert("Fill up complete form")

        }
  }
  
  return( <> 
             <section className='container registration-hero-container'>
              <div className='display-8'>
                <h1>Registration Page</h1>
              </div>
              <div className="form">
             <div className="form-group">
             <label for="cars">Role</label>
              {/* <Select options={role} onChange={changerole}></Select> */}
             <select id="name" name="role"  onChange={handlechange} required>
             <option value="farmer">Farmer</option>
            
             <option value="buyer">Buyer</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" value={user.username} placeholder="username" onChange={handlechange} required/>
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail ID</label>
              <input type="text" name="email" value={user.email} onChange={handlechange} placeholder="email" required/>
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input type="text" name="city" value={user.city} onChange={handlechange} placeholder="city" required/>
            </div>
            <div className="form-group">
              <label htmlFor="district">District</label>
              <input type="text" name="district" value={user.district} onChange={handlechange} placeholder="district" required/>
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input type="text" name="state" value={user.state} onChange={handlechange} placeholder="state" required/>
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input type="text" name="country" value={user.country} onChange={handlechange} placeholder="country" required/>
            </div>
            <div className="form-group">
              <label htmlFor="pincode">Pincode</label>
              <input type="text" name="pincode"pvalue={user.pincode} onChange={handlechange} placeholder="pincode" required/>
            </div>
            <div className="form-group">
              <label htmlFor="contactno">Contact No</label>
              <input type="text" name="contactno" value={user.contactno} onChange={handlechange} placeholder="contact no" required/>
            </div>
            <div className="form-group">
              <label htmlFor="adharno">Aadhar No</label>
              <input type="text" name="adharno" value={user.adharno} onChange={handlechange} placeholder="adhar no" required/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" value={user.password} onChange={handlechange} placeholder="password" required/>
            </div>
            <div className="btn1">
          <button type="button" className="btn" value='submit detail' onClick={submit} >
            Submit
          </button>
        </div>
          </div>
          
             </section>
         </>
  )
}

