import ResturantCards, { ResturantCardsPromoted } from "../Resturant_Page_Components/ResturantCards";
import { useEffect,useState } from "react";
import ShimmerCard from "../ShimmerUI_Components/ShimmerCard";
import { Link } from "react-router";
import { useFetch } from "../../utils/CoustomHooks/useFetch";

function ResturantCardsContainer()
{
    const resturantList = useFetch();
    
    const PromotedCard  = ResturantCardsPromoted(ResturantCards);

    if(resturantList.length===0)
        {
          
           return  <><div className='shimmer-style'><ShimmerCard/><ShimmerCard/><ShimmerCard/><ShimmerCard/></div></>;
        }

    return(
        <>
        <div className="dinning-resturant-card-container">
        {
          resturantList.map((resturantCard)=>
          {
             return(
               <Link  
                className="dinning-resturant-card-container-link"
                key={resturantCard.id} 
                to={`/Dining/Resturant/${resturantCard.id}`}> 
                {
                  resturantCard.isPromoted ? <PromotedCard  resturantCard={resturantCard} /> : 
                  <ResturantCards resturantCard={resturantCard} /> 
                }
                </Link>
             )
          })

        }
           </div>
        </>
    )
}

export default ResturantCardsContainer;