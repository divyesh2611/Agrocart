import axios from "axios";
import { useEffect, useState } from "react";
import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,

    CLEAR_ERRORS,
} from "../constants/productConstants";
// const [crop, setcrop] = useState([]);

    
//get product
export const getProduct = async (dispatch) => {
  // const [crop, setcrop] = useState([]);
    try {
      const crop = []  

      dispatch({ type: ALL_PRODUCT_REQUEST });
      axios
      .get(
        "http://localhost:9002/uploadcrop/" 
        
      )
      .then((res) => {
        console.log(res);   
        crop = res.data
        console.log(crop);
      })
      .catch((err) => {
        console.log(err);
      });
      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: crop,
      });

    } catch (error) {
        dispatch({
          type: ALL_PRODUCT_FAIL,
          payload: error.response.data.message,
        });
      }
    };
  

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };    