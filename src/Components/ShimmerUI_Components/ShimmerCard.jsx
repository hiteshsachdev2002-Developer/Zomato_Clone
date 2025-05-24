import React from 'react';
import '../../styles/Shimmer.css';


function ShimmerCard() {
    return (
         <div className="shimmer-card shimmer">
            <div className="shimmer-card-food-image shimmer-box" />
            <div className="shimmer-card-food-title shimmer-box shimmer-line" />
            <div className="shimmer-card-food-description shimmer-box shimmer-line" />
            <div className="shimmer-other-details">
                <div className="shimmer-card-food-ratings">
                    <div className="shimmer-box shimmer-line short" />
                    <div className="shimmer-box shimmer-line short" />
                    <div className="shimmer-box shimmer-line short" />
                </div>
                <div className="shimmer-food-price">
                    <div className="shimmer-box shimmer-line short" />
                </div>
            </div>
            <div className="shimmer-order-food-button shimmer-box shimmer-button" />
            <div className="shimmer-food-discount-container shimmer-box shimmer-line short" />
        </div>
    );
}

export default ShimmerCard;
