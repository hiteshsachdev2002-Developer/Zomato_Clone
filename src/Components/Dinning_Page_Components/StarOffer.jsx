import '../../styles/Header.css';
import React from 'react';
import StarOfferImage from '../../assets/StarOffer.jpg'; 
function StarOffer() {
  return (
    <>
   
        <div className="star-offer-image-div">
          <img
            className="star-offer-img"
            src={StarOfferImage}
            alt="Star Offer"
          />
        </div>
    </>
  );
}

export default StarOffer;