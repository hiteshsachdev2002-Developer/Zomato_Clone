function ResturantCards({Key, resturantCard}) {
    return (
      <>
        <div className="resturant-cards-dinning">
          <div className="resturant-card-dinning-image">
            <img
              src={resturantCard.IMAGE_URL}
              alt="ResturantFood"
              className="resturant-card-image"
            />
          </div>
          <div className="resturant-card-dinning-title">
            <div className="dinning-title-rating">
              <div className="dinning-title">{resturantCard.HOTEL_NAME}</div>
              <div className="dinning-rating">{resturantCard.HOTEL_RATING}★</div>
            </div>
            <div className="dinning-cuisine">{resturantCard.HOTEL_DESCRIPTION}</div>
            <div className="dinning-address">{resturantCard.ADDRESS}</div>
          </div>
        </div>
      </>
    );
  }

//creating the Higher Order Component in which we are passing the Component as a prop and returning the component with the props passed to it.
export function ResturantCardsPromoted(ResturantCards)
{

  return ({resturantCard})=>
  {
    return(
    <>
    <label className="resturant-card-label">Promoted</label>
    <ResturantCards resturantCard={resturantCard} />
    </>
    )
  }
} 

  
  export default ResturantCards;
  