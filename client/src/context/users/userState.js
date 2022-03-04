import { useState } from "react";
import Useritem from "../../../src/componets/Admin/useritem"

const UserState = (props) => {
  const host = "http://localhost:9002"
  const usersInitial = [];
  const [users, setUsers] = useState(usersInitial)
  const listItems = []

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
    console.log(json)
    // for(var i=0;i<json.length();i++)
    // {
    //   setUsers (json[i])
    // }
    // //setUsers(json)
    // console.log (users)
    listItems = json.map((d) => <li key={d._id}>{d.name}</li>);
   
    console.log(json)
    }
    //getUsers();
     return (
        
        <>
        <div className="container col-md-3 shadow-lg p-3 mb-5 bg-body rounded mx-5">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h4 className="card-title"><i className="fas fa-tags"></i></h4>
                    </div>
                    <b className="card-text"></b>
                    <p className="card-text text-uppercase"></p>
                    {/* <i className="far fa-trash-alt mx-2 fs-3" onClick={()=>{deleteCard(card._id);props.showAlert("Deleted Successfully!!","success")}}></i> */}
                    <button className="btn btn-primary" onClick={()=>{getUsers()}}></button>
                </div>
                <div>
                    {listItems}
                </div>
            </div>
           
        </div>
       
        </>

        
   )
}

export default UserState;