import React,{useEffect} from 'react';
import {  getProduct } from "../actions/productAction";
import { useSelector, useDispatch } from "react-redux";


export default function HomePage() {
    // const dispatch = useDispatch();
    
    // useEffect(() => {
       
    //     dispatch(getProduct());
    //   }, [dispatch]);

    return (<>
        <header>
        <section className='container main-hero-container'>
        <div className='main-herosection-images'>
        <img src='./Images/photos.jpg' alt='photosimg' className='img'/>
        <img src='./Images/photo2.jpg' alt='photosimg1' className='img'/>
        <img src='./Images/photos1.jpg' alt='photosimg2' className='img'/>
        <img src='./Images/photo7.jpg' alt='photosimg3' className='img'/>
        <img src='./Images/photo8.jpg' alt='photosimg4' className='img'/>
        <img src='./Images/photo9.jpg' alt='photosimg5' className='img'/>
        </div> 
        <div className='display-2'>
        <h1>The Online Farmer's Market</h1>
        <p className='main-hero-para'>
        Farming is the Prime Occupation in India in spite of this today the people involved in Farming belongs to the lower class and is in deep poverty. The Advanced techniques and the Automated machines which are leading the world to new heights,is been lagging when it is concerned to Farming ,either the lack of awareness of the advanced Facilities or the unavailability leads to the poverty in Farming. Even after all the hard work and production done by farmers,in today's market the Farmers are cheated by the Agents,leading to the market.   
        </p>
        </div>    
        </section>
        </header>
    </>);
}
