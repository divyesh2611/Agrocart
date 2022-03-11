import React, { useEffect, useState } from "react";
import axios from "axios";
// import crop from '/UploadProducts'

export default function DisplayProducts() {
  const [crop, setcrop] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://localhost:9002/uploadcrop/" +
        JSON.parse(localStorage.getItem("user")).username
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

  return (
    <>
      <section className="container productdetail-container">
        <div className="farmer">
          <h1>Display Products</h1>
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
            </tr>
          ))}
        </tbody>
        </table>
      </section>
      <br></br>
      </>
  );
}
