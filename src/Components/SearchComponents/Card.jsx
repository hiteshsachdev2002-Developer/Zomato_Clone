import React from "react";


function Card({foodData})  
{
    return(
        <>
          
             <div className="card">
                 <div className="card-food-image">
                        <img src="https://static.toiimg.com/thumb/52416693.cms?width=1200&height=900" alt="Food" className="food-image" />
                 </div>
                 <div className="card-food-title">
                 <p className="food-title">{foodData.name}</p>
                 </div>
                <div className="card-food-description">
                <p className="food-description">{foodData.description}</p>
                </div>
                <div className="other-details">
                 <div className="card-food-ratings">
                    <p className="food-ratings">Ratings:{foodData.ratings}/5</p>
                    <p className="food-reviews">Reviews: {foodData.reviews}</p>
                    <p className="food-delivery-time">Time:{foodData.deliveryTime}</p>
                 </div>
                    <div className="food-price">
                        <p className="price">Price: {foodData.price}</p>
                    </div>
                </div>
                <div className="order-food-button">
                    <button className="order-button">Order Now</button>
                </div>
                <div className="food-discount-container">
                <p className="discount">Discount:{foodData.discount}</p>
                </div>

             </div>
          
        </>
    )
}

export default Card;