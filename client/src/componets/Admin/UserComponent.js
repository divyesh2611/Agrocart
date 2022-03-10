import React from 'react'

const UserComponent = (props) => {
    const{username,role,pincode,email,district,country,contactno,city,adharno}= props.user
  return (
      <>
    
    <div>
    <table class="table table-striped">
 
  <tbody>
    <tr>
      <td>{role}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{city}</td>
      <td>{district}</td>
      <td>{country}</td>
      <td>{pincode}</td>
      <td>{contactno}</td>
      <td>{adharno}</td>
      
    </tr>
    
  </tbody>
</table>

    </div>
</>
  )
}

export default UserComponent