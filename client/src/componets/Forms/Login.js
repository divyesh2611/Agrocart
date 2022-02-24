import React,{useState} from 'react';
import axios from "axios" ;
 import { useHistory } from "react-router-dom";
 import {useNavigate} from 'react-router-dom';

export default function Login() {

   /* 
   if(isadmin)
   {

   }
   else{
     if(isfarmar)
   }
   */
   
   
  const navigate = useNavigate();
  // const classes = useStyles();

  const [user , setUser] = useState({
      email : "",
      password : "",
      role:"farmer"
 })
//  const [email , setEmail] = useState("")
 //const [alert, setAlert] = useState(null);
 const [message, setMessage] = useState("");
 function handlechange (e)
 {
     const {name , value} = e.target
     
     setUser({
      ...user,
      [name] : value
  })
 }

  function login ()
  {
      const {role,email,password}=user

      if(role && email && password)
      {
          axios.post("http://localhost:9002/login", user)
          .then ( res => {
              console.log(res.data);
               alert(res.data.message)
               //alert("hellp")
                  if (res.data.user)
                  {
                      //setMessage(res.data.message)
                     // setAlert(res.data.message)
                       if(role=='farmer')
                        navigate('/Farmer')
                       else if(role=='admin')
                        navigate('/Admin')
                       else
                        navigate('/Buyer')
                  }
                  else
                  {
                     // setMessage(res.data.message)
                      //setAlert(res.data.message)
                      navigate("/Login")
                  }
               })
      }else{
          alert("Please Enter Username and Password!!");
      }

      
  }








  return( <>
            <section className='container Login-hero-container'>
            <div className='display-9'>
             
            </div>
            <div className='form1'>
            <h1>Login Page</h1>
            <div className="form-group">
             <label for="cars">Role</label>
             <select id="name" name="role" value={user.role} onChange={handlechange}>
             <option value="farmer">Farmer</option>
             <option value="buyer">Buyer</option>
             <option value="admin">Admin</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail ID</label>
              <input type="text" name="email" placeholder="email" value={user.email} onChange={handlechange}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" value={user.password} onChange={handlechange} />
            </div>
            <div className="btn2">
          <button type="button" className="btn" onClick={login}>
            Submit
          </button>
        </div>
        </div>
    
            </section>
         </>
  )
}


