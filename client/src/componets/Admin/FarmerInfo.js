import React from 'react'
//import userContext from "../context/users/userContext"
//import Useritem from './useritem';
//mport {useContext} from 'react'

export default function FarmerInfo (props)  {

  
    //const context = useContext(userContext);
    //const { getUsers } = context;
    
        // eslint-disable-next-line 
  return (<>

             <section className='container Buyerdetail-container'>
               <div className='buyerd'>
               <h1>Farmer Informations</h1>
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
               </section>
            </section>
    
    </>
  )
}
