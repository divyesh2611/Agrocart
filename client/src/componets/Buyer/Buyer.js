import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Buyer() {

  const [crop, setcrop] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://localhost:9002/uploadcrop/" 
        
      )
      .then((res) => {
        console.log(res);   
        setcrop(res.data);
        console.log(crop);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const cart = () => {
      
  }


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
            <Link className="btn btn-buyer" to="/WishList">
              Cart
            </Link>
          </header>
        </div>
        <table>
        <thead className="far-product">
          <tr className= "far">
            <th>No</th>
            <th>Farmername</th>
            {/* <h2>Date</h2> */}
            <th>City</th>
            <th>Cropname</th>
            <th>CropQuantity(kg)</th>
            <th>CropDesc</th>
            {/* <h2>CropImg</h2> */}
            <th>CropPrice(Rs/kg)</th>
            {/* <h2>Modify</h2> */}
          </tr>
        </thead>
        <tbody className="far-product">
          {crop.map((item, index) => (
            <tr className="far" key={index}>
              <td>{index + 1} </td>
              <td>{item.username}</td>
              {/* <h2>12 March</h2> */}
              <td>{item.city}</td>
              <td>{item.cropname}</td>
              <td>{item.cropQuantity}</td>
              <td>{item.cropDescription}</td>
              {/* <td>{item.logo}</td> */}
              <td>{item.cropprice}</td>
              {/* <td>{item.Modify}</td> */}
              <a href="#" class="btn cart px-auto" onClick={cart}>
                  ADD TO CART
                </a>
            </tr>
          ))}
        </tbody>
        </table>
        
        {/* <div className="row d-flex justify-content-center">
    
          <div class="card mt-5 mx-4">
            {" "}
            <img
              class="mx-auto img-thumbnail"
              src="https://media.istockphoto.com/photos/wheat-picture-id479629438?b=1&k=20&m=479629438&s=170667a&w=0&h=W1WdyCrAR9n7s-JuagFWFTeLIUUfIdT6m6jc-a_Ri9w="
              width="250px"
              height="140px"
              
            />
            <div class="card-body text-center mx-auto">
              <div class="cvp">
                <h5 class="card-title font-weight-bold"> WHOLE WHEAT</h5>
                <p class="card-text">₹ 32</p> <br />{" "}
                <a href="#" class="btn cart px-auto">
                  ADD TO CART
                </a>
              </div>
            </div>
          </div>
        
      
          <div class="card  mt-5 mx-4">
            {" "}
            <img
              class="mx-auto img-thumbnail"
              src="https://media.istockphoto.com/photos/the-sugar-cane-picture-id965303384?k=20&m=965303384&s=612x612&w=0&h=Ck-TqGZJ1tuXjH-R2SS3N1jDAQVFJMk9RPAQh7jBeEc="
              width="250x"
              height="140px"
            />
            <div class="card-body text-center mx-auto">
              <div class="cvp">
                <h5 class="card-title font-weight-bold"> Sugarcane</h5>
                <p class="card-text">₹ 50</p> <br />{" "}
                <a href="#" class="btn cart px-auto">
                  ADD TO CART
                </a>
              </div>
            </div>
          </div>
       
          <div class="card  mt-5 mx-4">
            {" "}
            <img
              class="mx-auto img-thumbnail"
              src="https://images.unsplash.com/photo-1502395809857-fd80069897d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b3JnYW5pYyUyMGNvdHRvbnxlbnwwfHwwfHw%3D&w=1000&q=80"
              width="250px"
              height="140px"
            />
            <div class="card-body text-center mx-auto">
              <div class="cvp">
                <h5 class="card-title font-weight-bold"> Cotton</h5>
                <p class="card-text">₹ 43.2</p> <br />{" "}
                <a href="#" class="btn cart px-auto">
                  ADD TO CART
                </a>
              </div>
            </div>
           </div> 
        </div>*/}
        
      </section>
    </>
  );
}
