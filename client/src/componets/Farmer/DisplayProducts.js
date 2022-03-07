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
        <section className="far-product">
          <div className="far">
            <h2>Farmername</h2>
            <h2>Date</h2>
            <h2>City</h2>
            <h2>Cropname</h2>
            <h2>CropQuantity(kg)</h2>
            <h2>CropDesc</h2>
            <h2>CropImg</h2>
            <h2>CropPrice(Rs/kg)</h2>
            <h2>Modify</h2>
          </div>
        </section>
      </section>
      <br></br>
      <table>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col"> Farmername</th>
            <th scope="col">Date</th>
            <th scope="col">City</th>
            <th scope="col">Cropname</th>
            <th scope="col">CropQuantity(kg)</th>
            <th scope="col">CropDesc</th>
            <th scope="col">CropImg</th>
            <th scope="col">CropPrice(Rs/kg)</th>
            <th scope="col">Modify</th>
          </tr>
        </thead>
        <tbody>
          {crop.map((item, index) => (
            <tr key={index}>
              <td>{index + 1} </td>
              <td>{item.username}</td>
              {/* <td>{item.Date}</td> */}
              <td>{item.city}</td>
              <td>{item.cropname}</td>
              <td>{item.cropQuantity}</td>
              <td>{item.cropDescription}</td>
              {/* <td>{item.cropImg}</td> */}
              <td>{item.cropPrice}</td>
              {/* <td>{item.Modify}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
