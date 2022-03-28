import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';



export const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        localStorage.clear();
        localStorage.setItem('isUser',false)
        navigate("/Login")
    
      });

  return (
    <div>Logout...</div>
  )
}

