import React, { useEffect, useState } from 'react';
import axios from 'axios'
import FileBase from 'react-file-base64' ;
import { Link } from 'react-router-dom';
export default function UploadProducts  ()  {
 
  const [crop, setCrop] = useState({
    username:"",
    city:"",
    cropQuantity:"", 
    cropDescription:"",
    price:"",
    cropname:"",
    image:"" 
    
  })
  
  // const[profile,setProfile]=useState("")
  
  const handleonchange = e => {
    const {name,value } = e.target 
    console.log("name:",name)
    console.log("value:",value)
    setCrop({
      ...crop,
      [name]:value  
    })
  } 

  // const imagehandle = (e)=>{
  //   console.log(e.target.files[0])
  //   setCrop({...crop,image:e.target.files[0]
  //   })
  // }

    const submit = () => {
    
      


    const{image, cropname, username, city, cropQuantity, cropDescription, price} = crop
    const formdata = new FormData();
    formdata.append('image', crop.image, crop.image.name);
    formdata.append('username', crop.username);
    formdata.append('cropQuantity', crop.cropQuantity);
    formdata.append('price', crop.price);
    formdata.append('cropDescription', crop.cropDescription);
    formdata.append('cropname', crop.cropname);
    formdata.append('city', crop.city);

      console.log(JSON.stringify({image, cropname, username, city, cropQuantity, cropDescription, price}))
      if( username && city && cropQuantity && cropDescription && price )
        {
            // alert("valid")
            axios.post("http://localhost:9002/uploadcrop",formdata,{headers: {
              'Content-Type': `multipart/form-data; boundary=${formdata._boundary}`,
          },
}
           )
            .then ( res => {
                {
                    if (res.data.message)
                    {

                        alert("crop are Successfully added ")
                    }
                    
                }
                
            }).catch((error) =>{
              console.log("adsfa")
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
             <option value="cotton">cotton</option>
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
              
              {/* <input type="file" name="image" placeholder="image"value={crop.image} onChange={imagehandle} /> */}
                 

                  <input
                    type="file"
                    // multiple={false}
                    onChange={( base64 ) =>
                      setCrop({ ...crop, image: base64.target.files[0] })
                      // console.log(base64)
                    }
                    style={{ display: "" }}
                  />
                
              </div>  
            
            <div className='form-group8'>
                <label htmlfor="name">Crop Price (Rs/Kg) : </label>
                <input type="text" name="price" placeholder="price" value={crop.price} onChange={handleonchange} />
            </div>  

             {/* <Link className="btn  btn-style8" type="submit" onClick={submit}>Submit</Link> */}
             <Link  to='/UploadProducts'className="btn  btn-style8" type="submit" onClick={submit}>Submit</Link>
              </div>
          </section>
       
      </>
  )
}
