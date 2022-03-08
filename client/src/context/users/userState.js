
import { useState } from "react";
import FarmerInfo from "../../componets/Admin/FarmerInfo";
const UserState = (props) => {
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
  
     return (
        
        <>
        
                    <button className="btn btn-primary" onClick={()=>{getUsers()}}></button>
                
                <div>
                    {users.map(user =>{
                        return <FarmerInfo key={user.id} user={user}/>
                    })
                  }
                </div>
            
           
  
       
        </>

        
   )
}

export default UserState;