import React,{ useState} from "react";
import { Link } from 'react-router-dom';

export const Navbar = () => {

    const [show, setShow] = useState(false);

    return(
    <>
    
        <section className="navbar-bg">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
          
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShow(!show)} >
                <span className="navbar-toggler-icon"></span>
              </button>

            <div className={'collapse navbar-collapse ${show ? "show" : "" }'} id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to='/'>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/About'>About Farmer</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/programmes-schemes'>Programmes and Schemes</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/crops-information'>Crops Information</Link>
                </li>
              </ul>
              {localStorage.getItem("isUser") == 'true'? 
              <form className="d-flex">
                
                <Link className="btn btn-style" to='/Logout'>Logout</Link>
               
              </form>
               :  
              <form className="d-flex">
                {/* <button className="btn  btn-style" type="submit">Registration</button> */}
                <Link className="btn btn-style" to='/Registration'>Registration</Link>
                {/* <button className="btn  btn-style" type="submit">Log in</button> */}
                <Link className="btn btn-style" to='/Login'>Log In</Link>
              </form>
              }
            </div>
          </div>
        </nav>
      </section>
  </>
   ); 
};

export default Navbar;