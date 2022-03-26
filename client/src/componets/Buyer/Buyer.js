import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Itemcard from "./Itemcard";


export default function Buyer() {

  const [crop, setcrop] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://localhost:9002/uploadcrop/" 
        
      )
      .then((res) => {
        //console.log(res);   
        setcrop(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  

  
  // const [cart, setCart] = useState({
  
    
  // })
  const addcart = () => {
  
    
  }
console.log(crop)

  return (
    <>
      <section className="container buyer-container">
        <div className="buyer-display">
          <header>
            <h1>Welcome To The Web Page For Buyer</h1>
            <img src="./Images/buyer1.jpg" alt="photosimg3" className="img1" />
            <img src="./Images/buyer2.jpg" alt="photosimg3" className="img2" />
            <img src="./Images/buyer3.jpg" alt="photosimg3" className="img3" />
            <h2>
              The Following Products are available for sale. Enjoy shopping
            </h2>
            <Link className="btn btn-buyer" to="/WishList" >
              Cart
            </Link>
          </header>
        </div>
         
        {/* <table>
        <thead className="far-product">
          <tr className= "far">
            <th>No</th>
            <th>Farmername</th>
            <th>City</th>
            <th>Cropname</th>
            <th>CropQuantity(kg)</th>
            <th>CropDesc</th>
            <th>CropPrice(Rs/kg)</th>
          </tr>
        </thead> */}
        {/* <tbody className="far-product">
          {crop.map((item, index) => (
            <tr className="far" key={index}>
              <td>{index + 1} </td>
              <td>{item.username}</td>
              <td>{item.city}</td>
              <td>{item.cropname}</td>
              <td>{item.cropQuantity}</td>
              <td>{item.cropDescription}</td>
              <td><img src={`http://localhost:9002/public/images/${item.image}` } alt="img" className=""/></td>

              {console.log(item.image)}

              <td>{item.cropprice}</td>
              <a href="#" class="btn cart px-auto" onClick={cart}>
                  ADD TO CART
                </a>
            </tr>
          ))}
        </tbody> */}
        {/* </table> */}
        {/* {crop.map((item, index) => ( 
        <div className="row d-flex justify-content-center">
    
          <div class="card mt-5 mx-4">
            {" "}
            <img
              class="mx-auto img-thumbnail"
              src={`http://localhost:9002/public/images/${item.image}` }
              width="250px"
              height="140px"
              
            />
            <div class="card-body text-center mx-auto">
              <div class="cvp">
                <h5 class="card-title font-weight-bold"> {item.cropname}</h5>
                <p class="card-text">city: {item.city}</p> 
                <p class="card-text">price:{item.cropprice}</p> <br />{""}
                <a href="#" class="btn cart px-auto" onClick={addcart}>
                  ADD TO CART
                </a>
              </div>
            </div>
          </div>
        
      
          
        </div> 
        ))}   */}
      </section>
      <section className="py-4 container">
           <div className="row justify-content-center">
           {crop.map((item,index) => ( 
            <Itemcard image={`http://localhost:9002/public/images/${item.image}` } cropname = {item.cropname} cropprice ={item.cropprice} item={item} key={index} id={item.id}/>
            ))} 
           </div>
         </section>
    </>
  );
}
