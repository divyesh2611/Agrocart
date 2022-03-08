import React from 'react'
import UserComponent from './UserComponent'
import { useState } from "react";


export default function FarmerInfo (props)  {

   const host = "http://localhost:9002"
  const [users, setUsers] = useState([])
  

  // Get all Cards
  const getUsers = async () => {
    // API Call 
    const response = await fetch(`${host}/register/getusers`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
        
      }
    });
    const json = await response.json() 
    setUsers(json)
   
    console.log(json)
    }
    getUsers();

  
   
  return (<>

             <section className='container Buyerdetail-container'>
               <div className='buyerd'>
               <h1>Farmer Informations</h1>
               {/* <button className="btn btn-primary" onClick={()=>{getUsers()}}></button> */}
               </div> 
               <section className='buy'>
               <div className='buy1'>
                 <h2>Username</h2>
                 <h2>E-mail</h2>
                 <h2>City</h2>
                 <h2>District</h2>
                 <h2>Country</h2>
                 <h2>Pin code</h2>
                 <h2>Contact No.</h2>
                 <h2>Aadhar No.</h2>
               </div>
               
               <div>
                    {users.map(user =>{
                        return <UserComponent key={user.id} user={user}/>
                    })
                  }
                </div>
            

               </section>
            </section>
    
    </>
  )
}
