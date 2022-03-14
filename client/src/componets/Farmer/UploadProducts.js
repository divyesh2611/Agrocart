import React, { useEffect, useState } from 'react';
import axios from 'axios'
import FileBase from 'react-file-base64' ;
import { Link } from 'react-router-dom';
export default function UploadProducts  ()  {
 
  const [crop, setUser] = useState({
    username:"",
    city:"",
    cropQuantity:"", 
    cropDescription:"",
    cropprice:"",
    cropname:"",
    cropprice:"",
    logo:"" 
    
  })
  
  // const[profile,setProfile]=useState("")
  
  const handleonchange = e => {
    const {name,value } = e.target 
    setUser({
      ...crop,
      [name]:value  
    })
  } 
  const submit = () => {
    const{logo, cropname, username, city, cropQuantity, cropDescription, cropprice} = crop

      console.log(JSON.stringify({logo, cropname, username, city, cropQuantity, cropDescription, cropprice}))
      if(cropname && username && city && cropQuantity && cropDescription && cropprice )
        {
            // alert("valid")
            axios.post("http://localhost:9002/uploadcrop",crop)
            .then ( res => {
                {
                    if (res.data.message)
                    {

                        alert("crop are Successfully added ")
                    }
                    
                }
                
            })
        }else{
            alert("Fill up complete form")

        }
  }
  return (
      <>
  
          <section className='container upload-container'>
              <div className='display-1'>
                 
              </div>
              <div className='form4'>
                   <div className='form-group4'>
                   <h1>Upload Product</h1>
                <label for="cars">Crop Name : </label>
             <select id="name" name="cropname"value={crop.cropname} onChange={handleonchange}>
             <option value="name"> Select Option</option>
             <option value="wheat">Wheat(ઘઉં)</option>
             <option value="rice">Rice(ચોખા)</option>
             <option value="sugarcane">Sugarcane(શેરડી)</option>
             <option value="soybean">Soybean(સોયાબીન)</option>
             <option value="peanuts">Peanuts(મગફળી)</option>
             <option value="chickpeas">Chickpeas(ચણા)</option>
             <option value="sorghum">Sorghum(જુવાર)</option>
             </select>
            </div>
            <div className="form-group9">
              <label htmlFor="username">Farmer Name: </label>
              <input type="text" name="username" placeholder="username"value={crop.username} onChange={handleonchange}/>
            </div>
            <div className="form-group10">
              <label htmlFor="City">City: </label>
              <input type="text" name="city" placeholder="city"value={crop.city} onChange={handleonchange} />
            </div>
            <div className="form-group5">
              <label htmlFor="username">Crop Quantity(Kg) :</label>
              <input type="text" name="cropQuantity" placeholder="cropQuantity" value={crop.cropQuantity} onChange={handleonchange} />
            </div>
            <div className="form-group6">
              <label htmlFor="name">Crop Description : </label>
              <input type="text" name="cropDescription" placeholder="cropDescription" value={crop.cropDescription} onChange={handleonchange} />
            </div>
            <div className="form-group7">
              <label htmlFor="name">Crop Image : </label> 
              
                  
                 

                  <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setUser({ ...crop, logo: base64 })
                    }
                    style={{ display: "" }}
                  />
                
              </div>  
              {/* <div className='form-group8'> 
              <img
                      src={crop.logo}
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "5px",
                      }}
                    /> 
                </div>    */}
            <div className='form-group8'>
                <label htmlfor="name">Crop Price (Rs/Kg) : </label>
                <input type="text" name="cropprice" placeholder="cropprice" value={crop.cropprice} onChange={handleonchange} />
            </div>  
             {/* <Link className="btn  btn-style8" type="submit" onClick={submit}>Submit</Link> */}
             <Link  to='/Farmer'className="btn  btn-style8" type="submit" onClick={submit}>Submit</Link>
              </div>
          </section>
       
      </>
  )
}
