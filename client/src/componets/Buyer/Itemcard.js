import React  from 'react'
import {CartProvider,useCart} from 'react-use-cart'


const Itemcard =(props) => {
    const {addItem} = useCart();
    
    return (
     
      <div className='col-11 col-md-6 col-lg-4 mx-0 mb-4'>
        <div className="card p-0 shadow">
            <img
              className="card-img-top img-fluid"
              src={props.image}
            //   width="250px"
            //   height="140px"
              
            />
            <div className="card-body">
              <div className="cvp">
                <h5 className="card-text"> {props.cropname}</h5>  
                <h5 className="card-text">${props.price}</h5>
                <button  className="btn btn-success" onClick={()=>addItem(props.item)} >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
      </div>
    )
  }
export default Itemcard
